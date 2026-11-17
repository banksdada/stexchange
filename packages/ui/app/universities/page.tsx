import type { Metadata } from "next";
import PageImage from "@/components/PageImage";
import { Check, Cta, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "For universities" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="For universities" title="A vetted international cohort, without the administrative load.">
        We recruit, screen and support students, and look after accommodation and welfare. You deliver the academic experience and welcome them to campus.
      </PageHero>
      <PageImage file="universities.jpg" alt="Students and a lecturer in a UK university seminar room" />
      <Section eyebrow="Roles" title="A clear division of responsibility.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-bold">What the programme handles</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <Check>Recruitment through Ghanaian universities, screening and in-person selection</Check>
              <Check>Parental consent and signed agreements</Check>
              <Check>Accommodation, insurance and visa guidance</Check>
              <Check>Weekly welfare checks and a named UK contact</Check>
              <Check>Per-student records you can inspect on request</Check>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold">What we ask of the university</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <Check>Deliver the agreed academic content and assessment</Check>
              <Check>Provide a letter of support for each student’s visa application</Check>
              <Check>Give students access to campus facilities</Check>
              <Check>Issue a certificate of participation or completion</Check>
              <Check>Tell us promptly about any academic or conduct concern</Check>
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="soft" eyebrow="Value" title="What the partnership offers.">
        <ul className="grid max-w-3xl gap-4">
          <Check>Tuition income from a cohort of well-prepared students</Check>
          <Check>Stronger links with Ghanaian universities and a pipeline towards postgraduate study</Check>
          <Check>A pilot cohort of around 100 students, with room to grow after a successful first run</Check>
          <Check>Evidence of safeguarding and compliance for every student</Check>
        </ul>
        <p className="mt-8 max-w-3xl text-slate-600">
          We name partner universities on this site only after agreements are confirmed in writing. If you would like to discuss a pilot, we would be glad to talk.
        </p>
      </Section>
      <Cta title="Explore a pilot partnership." text="Tell us about your institution and the number of placements you could host." label="Start the conversation" />
    </>
  );
}
