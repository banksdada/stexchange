import type { Metadata } from "next";
import { Check, Cta, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "Eligibility" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Eligibility" title="Who can take part.">
        The programme is for strong final-year students, selected through their own university and with their family’s support.
      </PageHero>
      <Section eyebrow="Core requirements" title="What we look for.">
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-4">
            <Check><strong>Level 400 (final-year) student</strong> at a Ghanaian university. Level 300 students are considered only in exceptional cases.</Check>
            <Check><strong>Nominated by your university</strong> after its own academic screening.</Check>
            <Check><strong>Selected in person</strong> by the programme team before any offer is made.</Check>
            <Check><strong>Parent or guardian consent</strong> given in writing before departure.</Check>
            <Check><strong>A signed memorandum of understanding</strong>, including your commitment to return to Ghana after the programme.</Check>
            <Check><strong>Agreement not to work</strong> during the placement.</Check>
          </ul>
          <div className="card">
            <h2 className="text-lg font-bold">Documents to have ready</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <Check>Official academic transcripts</Check>
              <Check>Valid passport</Check>
              <Check>Confirmation from your university</Check>
              <Check>Signed parent or guardian consent</Check>
            </ul>
            <p className="mt-5 text-sm text-slate-500">
              Partner universities may add their own requirements. These are confirmed before each cohort opens, and the programme team will tell you exactly what applies.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="soft" eyebrow="Not sure?" title="Ask before you apply.">
        <p className="max-w-2xl text-lg text-slate-600">
          If you are not certain whether you qualify, or your university is not yet involved, tell us. We would rather answer your questions early than have you prepare for the wrong thing.
        </p>
      </Section>
      <Cta title="Think you might qualify?" text="Register your interest and we will tell you what happens next." />
    </>
  );
}
