"""Public enquiry endpoint and token-protected admin listing."""

import hmac
import os
import smtplib
import time
from collections import defaultdict, deque
from email.message import EmailMessage

from fastapi import APIRouter, BackgroundTasks, Header, HTTPException, Request
from sqlmodel import Session, select

from ..db import engine
from ..models import Enquiry, EnquiryCreate

router = APIRouter()

# Simple in-memory limiter: 5 enquiries per IP per hour (single-instance deployment).
_WINDOW = 3600
_LIMIT = 5
_hits: dict[str, deque] = defaultdict(deque)


def _rate_limited(ip: str) -> bool:
    now = time.time()
    q = _hits[ip]
    while q and now - q[0] > _WINDOW:
        q.popleft()
    if len(q) >= _LIMIT:
        return True
    q.append(now)
    return False


def _notify(enq: Enquiry) -> None:
    """Email the programme team if SMTP settings are configured. Never raises."""
    host, to = os.getenv("SMTP_HOST"), os.getenv("NOTIFY_TO")
    if not host or not to:
        return
    try:
        msg = EmailMessage()
        msg["Subject"] = f"New programme enquiry ({enq.role}): {enq.name}"
        msg["From"] = os.getenv("SMTP_FROM", to)
        msg["To"] = to
        msg["Reply-To"] = enq.email
        msg.set_content(
            f"Name: {enq.name}\nEmail: {enq.email}\nType: {enq.role}\nCountry: {enq.country}\n"
            f"Organisation: {enq.organisation}\nLevel/year: {enq.level_or_year}\nIntake: {enq.intake}\n"
            f"Cohort size: {enq.cohort_size}\nLanguage: {enq.language}\n\n{enq.message}\n"
        )
        with smtplib.SMTP(host, int(os.getenv("SMTP_PORT", "587")), timeout=15) as s:
            s.starttls()
            if os.getenv("SMTP_USER"):
                s.login(os.environ["SMTP_USER"], os.getenv("SMTP_PASSWORD", ""))
            s.send_message(msg)
    except Exception as exc:  # noqa: BLE001 - notification must not break the request
        print(f"[enquiries] notification failed: {exc}")


@router.post("/enquiries", status_code=201)
def create_enquiry(
    payload: EnquiryCreate,
    request: Request,
    background: BackgroundTasks,
    x_forwarded_for: str | None = Header(default=None),
):
    # Bots fill the hidden field; pretend success without saving.
    if payload.website:
        return {"ok": True}
    ip = (x_forwarded_for or (request.client.host if request.client else "unknown")).split(",")[0].strip()
    if _rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many enquiries. Please try again later.")
    data = payload.model_dump(exclude={"website"})
    enq = Enquiry(**data)
    with Session(engine) as session:
        session.add(enq)
        session.commit()
        session.refresh(enq)
    background.add_task(_notify, enq)
    return {"ok": True, "id": enq.id}


@router.get("/admin/enquiries")
def list_enquiries(x_admin_token: str | None = Header(default=None)):
    token = os.getenv("ADMIN_TOKEN")
    if not token:
        raise HTTPException(status_code=503, detail="Admin listing is disabled (ADMIN_TOKEN not set)")
    if not x_admin_token or not hmac.compare_digest(x_admin_token, token):
        raise HTTPException(status_code=401, detail="Unauthorised")
    with Session(engine) as session:
        return session.exec(select(Enquiry).order_by(Enquiry.created_at.desc())).all()
