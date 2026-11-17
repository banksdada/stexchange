import Link from "next/link";
import { Check, Cta, Section } from "@/components/Section";

const facts = [
  { k: "4 months", v: "in the UK, then home to finish your degree" },
  { k: "Level 400", v: "final-year students nominated by their university" },
  { k: "£3,000–£4,000", v: "indicative programme fee, confirmed per cohort" },
  { k: "Ghana first", v: "with Nigeria planned as the next market" },
];

const journey = [
  ["Nomination", "Your Ghanaian university nominates you after its own academic screening."],
  ["Application", "You apply online and submit your documents, with your family's consent."],
  ["Selection", "The programme team meets shortlisted students in person before any final decision."],
  ["Preparation", "Visa guidance, insurance, accommodation and a pre-departure briefing."],
  ["In the UK", "Four months of study and experience at a UK university, with weekly welfare checks."],
  ["Return", "You come home with a certificate and the UK exposure to finish your degree."],
];

const safeguards = [
  "School-led screening and in-person final selection",
  "Parent or guardian consent before departure",
  "A signed memorandum of understanding for every student",
  "Programme-run, vetted accommodation",
  "Travel insurance covering medical care and repatriation",
  "Weekly welfare checks and a named UK point of contact",
  "No employment during the placement",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="container-x relative py-20 sm:py-28">
          <p className="eyebrow">UK Student Exposure Programme</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight !text-white sm:text-6xl">
            Four months in the UK.
            <span className="block text-gold">A degree still waiting at home.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            A structured, safeguarded study-and-experience placement at a UK university for final-year Ghanaian students,
            with vetted accommodation, regular welfare checks and full support from application to return.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">Register your interest</Link>
            <Link href="/how-it-works" className="btn-ghost">See how it works</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="px-2 py-6 sm:px-6">
              <p className="font-heading text-2xl font-extrabold text-navy">{f.k}</p>
              <p className="mt-1 text-sm text-slate-600">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Why it exists"
        title="UK exposure without the cost of a full Master’s."
        intro="Many strong Ghanaian students want to see how UK higher education works before committing to postgraduate study. This programme gives them that experience, with the structure and protection families expect."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["For students", "Learn in a UK university, build your CV and your network, and return with a clearer path to postgraduate study."],
            ["For families", "Selection through the student’s own university, parental consent, supervised accommodation and regular checks."],
            ["For universities", "A vetted, well-supported international cohort, with the programme team handling logistics and welfare."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="The journey" title="Six stages, each approved before the next begins.">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {journey.map(([t, d], i) => (
            <li key={t} className="card relative pt-10">
              <span className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-gold font-heading text-sm font-extrabold text-navy shadow-card">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8"><Link href="/how-it-works" className="font-semibold text-brand underline">Read the full journey →</Link></p>
      </Section>

      <Section eyebrow="Safeguarding" title="Built around the student’s safety and return.">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <ul className="space-y-3 text-slate-700">
            {safeguards.map((s) => <Check key={s}>{s}</Check>)}
          </ul>
          <div className="rounded-2xl bg-navy p-8 text-white shadow-lift">
            <p className="eyebrow">Our promise on transparency</p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">
              We publish partner universities only once agreements are confirmed in writing, and we keep a record of every approval,
              consent and welfare check so that universities and families can see how each student is protected.
            </p>
            <Link href="/safeguards" className="btn-gold mt-6">Read our safeguards</Link>
          </div>
        </div>
      </Section>

      <Cta
        title="Ready to find out whether the programme fits you?"
        text="Tell us who you are and what you would like to know. A member of the programme team will reply personally."
      />
    </>
  );
}
