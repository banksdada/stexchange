"""Data models for the UK Student Exposure Programme site API."""

from datetime import datetime
from typing import Optional

from pydantic import field_validator
from sqlmodel import Field, SQLModel

ROLES = {"student", "parent", "university", "school", "accommodation", "other"}


class EnquiryBase(SQLModel):
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(max_length=254)
    country: Optional[str] = Field(default=None, max_length=80)
    role: str = Field(max_length=30)
    organisation: Optional[str] = Field(default=None, max_length=160)
    level_or_year: Optional[str] = Field(default=None, max_length=60)
    intake: Optional[str] = Field(default=None, max_length=60)
    cohort_size: Optional[str] = Field(default=None, max_length=40)
    language: Optional[str] = Field(default="English", max_length=40)
    message: str = Field(min_length=10, max_length=4000)
    consent: bool

    @field_validator("email")
    @classmethod
    def _email(cls, v: str) -> str:
        v = v.strip().lower()
        if "@" not in v or v.startswith("@") or v.endswith("@") or " " in v or "." not in v.split("@")[-1]:
            raise ValueError("Enter a valid email address")
        return v

    @field_validator("role")
    @classmethod
    def _role(cls, v: str) -> str:
        if v not in ROLES:
            raise ValueError("Unknown enquiry type")
        return v

    @field_validator("consent")
    @classmethod
    def _consent(cls, v: bool) -> bool:
        if v is not True:
            raise ValueError("Consent is required")
        return v


class EnquiryCreate(EnquiryBase):
    # Honeypot: real people never see or fill this field.
    website: Optional[str] = None


class Enquiry(EnquiryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow, index=True)
    status: str = Field(default="new", max_length=20)
