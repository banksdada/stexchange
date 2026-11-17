import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Forwards the form to the FastAPI service. API_URL is read at runtime, so no rebuild is needed to change it.
const API_URL = process.env.API_URL || "http://localhost:8000";

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  try {
    const res = await fetch(`${API_URL}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": ip },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (res.ok) return NextResponse.json({ ok: true });
    if (res.status === 429) {
      return NextResponse.json({ error: "Too many enquiries from your connection. Please try again later." }, { status: 429 });
    }
    if (res.status === 422) {
      return NextResponse.json({ error: "Please check the form: some details are missing or not valid." }, { status: 422 });
    }
    return NextResponse.json({ error: "We could not save your enquiry. Please email us instead." }, { status: 502 });
  } catch {
    return NextResponse.json({ error: "We could not reach our server. Please email us instead." }, { status: 502 });
  }
}
