"use client";
import { FormEvent, useState } from "react";

const ROLES = [
  { v: "student", l: "I am a student" },
  { v: "parent", l: "I am a parent or guardian" },
  { v: "school", l: "I represent a Ghanaian university or school" },
  { v: "university", l: "I represent a UK university" },
  { v: "accommodation", l: "I provide accommodation" },
  { v: "other", l: "Something else" },
];

const field = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-800 shadow-sm focus:border-brand focus:ring-2 focus:ring-brand/30";
const label = "block text-sm font-semibold text-navy";

export default function EnquiryForm() {
  const [role, setRole] = useState("student");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    const body = Object.fromEntries(f.entries()) as Record<string, unknown>;
    body.consent = f.get("consent") === "on";
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setState("done");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Please try again or email us.");
      setState("error");
    } catch {
      setError("We could not reach the server. Please try again or email us.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="card text-center" role="status">
        <h3 className="text-xl font-bold">Thank you — your enquiry has been received.</h3>
        <p className="mt-3 text-slate-600">
          A member of the programme team will reply to the email address you gave. Please check your spam folder if you do not hear from us.
        </p>
      </div>
    );
  }

  const isStudent = role === "student" || role === "parent";
  const isInstitution = role === "school" || role === "university" || role === "accommodation";

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate={false}>
      <div>
        <label htmlFor="role" className={label}>Who are you? *</label>
        <select id="role" name="role" required value={role} onChange={(e) => setRole(e.target.value)} className={field}>
          {ROLES.map((r) => <option key={r.v} value={r.v}>{r.l}</option>)}
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address *</label>
          <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="country" className={label}>Country</label>
          <input id="country" name="country" maxLength={80} autoComplete="country-name" className={field} />
        </div>
        {isInstitution && (
          <div>
            <label htmlFor="organisation" className={label}>Organisation *</label>
            <input id="organisation" name="organisation" required maxLength={160} className={field} />
          </div>
        )}
        {isStudent && (
          <>
            <div>
              <label htmlFor="organisation" className={label}>University or school</label>
              <input id="organisation" name="organisation" maxLength={160} className={field} />
            </div>
            <div>
              <label htmlFor="level_or_year" className={label}>Current level</label>
              <select id="level_or_year" name="level_or_year" className={field} defaultValue="">
                <option value="">Select…</option>
                <option>Level 400 (final year)</option>
                <option>Level 300</option>
                <option>Other</option>
              </select>
            </div>
          </>
        )}
        {role === "university" && (
          <div>
            <label htmlFor="cohort_size" className={label}>Placements you might host</label>
            <select id="cohort_size" name="cohort_size" className={field} defaultValue="">
              <option value="">Not sure yet</option>
              <option>Up to 25</option>
              <option>25–50</option>
              <option>50–100</option>
              <option>100+</option>
            </select>
          </div>
        )}
        <div>
          <label htmlFor="intake" className={label}>When are you thinking of?</label>
          <select id="intake" name="intake" className={field} defaultValue="">
            <option value="">Not sure yet</option>
            <option>Next cohort</option>
            <option>Within 6 months</option>
            <option>6–12 months</option>
            <option>Just exploring</option>
          </select>
        </div>
        <div>
          <label htmlFor="language" className={label}>Reply language</label>
          <select id="language" name="language" className={field} defaultValue="English">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Your message *</label>
        <textarea id="message" name="message" required minLength={10} maxLength={4000} rows={5} className={field}
          placeholder="Tell us what you would like to know or discuss." />
      </div>
      {/* Honeypot: hidden from people, bots fill it in */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300 text-brand" />
        <span>
          I agree to {`BJK Global Consult`} using these details to reply to my enquiry, as described in the{" "}
          <a href="/privacy" className="font-semibold text-brand underline">privacy notice</a>. *
        </span>
      </label>
      {state === "error" && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={state === "sending"} className="btn-navy w-full disabled:opacity-60 sm:w-auto">
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
