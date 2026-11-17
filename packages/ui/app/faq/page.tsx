import type { Metadata } from "next";
import { Cta, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  ["Who can join?", "Final-year (Level 400) students at Ghanaian universities, nominated by their own university. Level 300 students are considered only in exceptional cases."],
  ["How long is the programme?", "About four months in the UK. Students then return to Ghana to complete their degree."],
  ["How much does it cost?", "The indicative programme fee is £3,000 to £4,000 per student. The exact amount and what it includes are confirmed in writing for each cohort before applications open."],
  ["Which UK universities are involved?", "We name partner universities only once agreements are confirmed in writing. If you are a UK university and would like to take part, please contact us."],
  ["What visa will students need?", "The visa route is being confirmed with a UK immigration adviser. We will publish clear guidance as soon as it is confirmed, and we will support students through the application."],
  ["Where will students live?", "In accommodation arranged and managed by the programme and checked against health and safety standards."],
  ["Can students work in the UK?", "No. Students do not undertake paid work during the programme."],
  ["What if a student does not return?", "Students and guardians sign an agreement that includes a commitment to return to Ghana after the programme. The wording is being finalised with a solicitor and will be shared before anyone signs."],
  ["How are students looked after?", "Through weekly welfare checks, a named point of contact in the UK, travel insurance and a clear escalation route. See our safeguards page for detail."],
  ["Will the programme expand to other countries?", "Ghana comes first. Nigeria is planned as the next market once the pilot has run."],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions we are asked most." />
      <Section>
        <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-navy">
                {q}
                <span aria-hidden className="text-2xl leading-none text-gold-dark transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </Section>
      <Cta title="Didn’t find your answer?" text="Send us your question and we will reply personally." label="Ask the team" />
    </>
  );
}
