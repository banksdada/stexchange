import os
import tempfile

os.environ["DATABASE_URL"] = f"sqlite:///{tempfile.mkdtemp()}/test.db"
os.environ["ADMIN_TOKEN"] = "secret-token"

from fastapi.testclient import TestClient  # noqa: E402

from app.main import app  # noqa: E402
from app.routers import enquiries  # noqa: E402

GOOD = {
    "name": "Ama Mensah",
    "email": "Ama@Example.com",
    "country": "Ghana",
    "role": "student",
    "level_or_year": "Level 400",
    "message": "I would like to know about the next intake.",
    "consent": True,
}


def client():
    enquiries._hits.clear()
    return TestClient(app)


def test_health():
    with client() as c:
        assert c.get("/health").json() == {"status": "ok"}


def test_create_and_list():
    with client() as c:
        r = c.post("/enquiries", json=GOOD)
        assert r.status_code == 201 and r.json()["ok"] is True
        assert c.get("/admin/enquiries").status_code == 401
        rows = c.get("/admin/enquiries", headers={"X-Admin-Token": "secret-token"}).json()
        assert any(x["email"] == "ama@example.com" for x in rows)


def test_validation():
    with client() as c:
        assert c.post("/enquiries", json={**GOOD, "consent": False}).status_code == 422
        assert c.post("/enquiries", json={**GOOD, "role": "hacker"}).status_code == 422
        assert c.post("/enquiries", json={**GOOD, "email": "not-an-email"}).status_code == 422
        assert c.post("/enquiries", json={**GOOD, "message": "short"}).status_code == 422


def test_honeypot_not_saved():
    with client() as c:
        before = len(c.get("/admin/enquiries", headers={"X-Admin-Token": "secret-token"}).json())
        assert c.post("/enquiries", json={**GOOD, "website": "http://spam"}).status_code == 201
        after = len(c.get("/admin/enquiries", headers={"X-Admin-Token": "secret-token"}).json())
        assert before == after


def test_rate_limit():
    with client() as c:
        codes = [c.post("/enquiries", json=GOOD).status_code for _ in range(6)]
        assert codes[:5] == [201] * 5 and codes[5] == 429
