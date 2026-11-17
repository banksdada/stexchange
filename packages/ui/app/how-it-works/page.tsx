import type { Metadata } from "next";
import PageImage from "@/components/PageImage";
import { Check, Cta, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "How it works" };

const stages = [
  ["1. Nomination", "Your Ghanaian university nominates final-year (Level 400) students after its own academic screening. Level 300 students are considered only in exceptional cases."],
  ["2. Application", "Nominated students apply online and upload their documents, including academic transcripts, identification and parent or guardian consent. The programme team checks every application."],
  ["3. Screening and selection", "The school confirms each candidate. The programme team then meets shortlisted students in person, and the final selection decision is made by the programme sponsor."],
  ["4. Agreements and preparation", "Each selected student, their guardian and the programme sign a memorandum of understanding. The team arranges insurance, accommodation and a pre-departure briefing, and supports your visa application."],
  ["5. Four months in the UK", "You study and take part in the programme at a UK university partner, living in programme-run accommodation. The programme team carries out weekly welfare checks, and you do not undertake paid work."],
  ["6. Return and certificate", "You return to Ghana to complete your degree, with a certificate of participation or completion from the university and a clearer route into postgraduate study."],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From nomination to return, every step is mapped.">
        The programme follows a fixed sequence of approvals. Nothing moves to the next stage until the one before it is complete and recorded.
      </PageHero>
      <PageImage file="how-it-works.jpg" alt="Students arriving on a UK university campus with their luggage" />
      <Section>
        <ol className="space-y-5">
          {stages.map(([t, d]) => (
            <li key={t} className="card md:grid md:grid-cols-[16rem_1fr] md:gap-8">
              <h2 className="text-lg font-bold">{t}</h2>
              <p className="mt-2 leading-relaxed text-slate-600 md:mt-0">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="soft" eyebrow="What the programme covers" title="Support that goes with you.">
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-3">
            <Check>Academic classes and assessment provided by the UK university partner</Check>
            <Check>Accommodation arranged and managed by the programme</Check>
            <Check>Visa guidance and travel insurance arrangements</Check>
            <Check>Weekly welfare checks and a named point of contact in the UK</Check>
            <Check>Pre-departure briefing for students and families</Check>
          </ul>
          <div className="card">
            <h3 className="text-lg font-bold">Fees</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              The indicative programme fee is <strong>£3,000 to £4,000 per student</strong>. The final amount, what it includes and the payment
              schedule are confirmed for each cohort before applications open, so families always see the full cost in writing first.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Visa route and costs are being confirmed with a UK immigration adviser. We will publish visa guidance here as soon as it is confirmed.
            </p>
          </div>
        </div>
      </Section>
      <Cta title="Have a question about a stage?" text="Ask the programme team. We reply to every enquiry personally." />
    </>
  );
}
