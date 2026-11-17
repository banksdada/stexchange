import type { Metadata } from "next";
import { Check, Cta, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "Safeguards" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Safeguarding" title="Protecting every student, and being able to prove it.">
        Students travelling abroad are often young adults far from home. The programme is designed so that families, universities and regulators can see exactly how each student is looked after.
      </PageHero>
      <Section eyebrow="Before departure" title="Careful selection and agreements.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["School-led screening", "Students are nominated by their own university, which knows their record and character."],
            ["In-person selection", "The programme team meets shortlisted students before any final decision is made."],
            ["Consent and agreements", "Parent or guardian consent and a signed memorandum of understanding for every student."],
          ].map(([t, d]) => (
            <div key={t} className="card"><h3 className="text-lg font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></div>
          ))}
        </div>
      </Section>
      <Section tone="soft" eyebrow="During the programme" title="Supervised, supported, accountable.">
        <ul className="grid max-w-3xl gap-4">
          <Check>Programme-run accommodation that meets health and safety standards</Check>
          <Check>Travel insurance covering medical emergencies and repatriation</Check>
          <Check>Weekly welfare checks, with a named point of contact in the UK</Check>
          <Check>No paid employment during the placement</Check>
          <Check>Attendance and welfare records kept for each student</Check>
          <Check>A clear escalation route when a check is missed or a concern is raised</Check>
        </ul>
      </Section>
      <Section eyebrow="Responsibility" title="Who is accountable for what.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["The programme", "Vets accommodation, arranges insurance, runs welfare checks and keeps the records."],
            ["The UK university", "Delivers the academic programme, supports the visa application and tells us promptly about any academic or conduct concern."],
            ["The student and guardian", "Attend classes, follow UK immigration rules and university policies, give accurate information, and return to Ghana at the end of the programme."],
          ].map(([t, d]) => (
            <div key={t} className="card"><h3 className="text-lg font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-slate-500">
          The memorandum of understanding is being reviewed by a solicitor, and visa arrangements are being confirmed with an immigration adviser. The final wording will be shared with students and families before anyone is asked to sign.
        </p>
      </Section>
      <Cta title="Want to see the detail?" text="Universities and families can ask for the full safeguarding approach and sample documents." label="Contact the team" />
    </>
  );
}
