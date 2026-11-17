import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero, Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy notice" };

function Tbc({ children }: { children?: ReactNode }) {
  return (
    <span className="rounded bg-gold-light px-1.5 py-0.5 text-sm font-semibold text-gold-dark">
      To be confirmed{children ? `: ${children}` : ""}
    </span>
  );
}

const collected: [string, string, string][] = [
  ["Name, email, country and your message", "When you use the enquiry form", "To reply to you"],
  ["Name, contact details, university, level of study and academic transcripts", "When applications open", "To assess your application and confirm it with your university"],
  ["Passport details and visa documents", "After selection", "To support your visa application and arrange travel"],
  ["Parent or guardian name, contact details and consent", "When applications open", "To obtain and record consent before you travel"],
  ["Signed memorandum of understanding", "After selection", "To record the agreement between you, your guardian, the programme and the university"],
  ["Accommodation, insurance and emergency contact details", "Before departure", "To arrange your stay and keep you safe"],
  ["Attendance, welfare check and incident records", "During the programme", "To look after you and show universities and authorities how you were supported"],
  ["Payment details", "Later phase", "To collect fees"],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice" />
      <Section>
        <div className="max-w-3xl space-y-6 leading-relaxed text-slate-700">
          <p className="rounded-lg bg-gold-pale p-4 text-sm text-slate-600">
            This notice is being finalised before student applications open. Only the enquiry form is live today. Items marked{" "}
            <Tbc /> will be completed first.
          </p>

          <h2 className="text-xl font-bold">Who we are</h2>
          <p>
            {SITE.org} runs the {SITE.name} and is the controller of your personal data, which means we decide how and why it is used.
            Our legal entity details are <Tbc />. Contact us at{" "}
            <a className="font-semibold text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or at {SITE.location}.
          </p>

          <h2 className="text-xl font-bold">What we collect and why</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead className="bg-slate-50 font-heading text-navy">
                <tr><th className="p-3">What</th><th className="p-3">When</th><th className="p-3">Why we use it</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {collected.map(([a, b, c]) => (
                  <tr key={a}><td className="p-3">{a}</td><td className="p-3">{b}</td><td className="p-3">{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Our legal basis for each use is <Tbc />. Whether any health information is collected is <Tbc />.</p>

          <h2 className="text-xl font-bold">Who we share it with</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Your Ghanaian university, to confirm your nomination and place.</li>
            <li>The UK university partner, for your academic placement and visa support letter.</li>
            <li>The accommodation provider and the travel insurer, so they can serve you.</li>
            <li>Our hosting and email providers, who process data on our behalf (<Tbc>names and locations</Tbc>).</li>
            <li>Programme staff, on a need-to-know basis.</li>
          </ul>
          <p>We do not sell your data.</p>

          <h2 className="text-xl font-bold">Automated tools</h2>
          <p>
            We plan to use an AI tool to read uploaded documents, check them against the programme rules and draft messages. It only drafts and flags.
            A named member of staff approves every decision, and the tool never contacts anyone itself.
          </p>

          <h2 className="text-xl font-bold">Moving data between countries</h2>
          <p>Your data will move between Ghana and the UK. Where it is stored and the safeguards that apply are <Tbc />.</p>

          <h2 className="text-xl font-bold">How long we keep it</h2>
          <p>We keep your data for no longer than needed for the purposes above. Retention periods are <Tbc />.</p>

          <h2 className="text-xl font-bold">Your rights</h2>
          <p>
            You can ask us to access, correct or delete your data, restrict or object to its use, or receive a copy. Email{" "}
            <a className="font-semibold text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>. You can also complain to the
            Information Commissioner’s Office at ico.org.uk.
          </p>

          <h2 className="text-xl font-bold">If you are under 18</h2>
          <p>Arrangements for applicants under 18, and for a parent or guardian acting for a student, are <Tbc />.</p>
        </div>
      </Section>
    </>
  );
}
