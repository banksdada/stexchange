"""API for the UK Student Exposure Programme site (built on the Quick-Stack scaffold)."""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from sqlmodel import SQLModel

from . import models  # noqa: F401  (registers tables)
from .db import engine
from .routers import enquiries


@asynccontextmanager
async def lifespan(_: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield


app = FastAPI(title="UK Student Exposure Programme API", version="0.2.0", lifespan=lifespan)


@app.get("/health")
def health():
    return {"status": "ok"}


app.include_router(enquiries.router)
