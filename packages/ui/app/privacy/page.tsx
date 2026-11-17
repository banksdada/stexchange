import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy notice" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice" />
      <Section>
        <div className="max-w-3xl space-y-6 leading-relaxed text-slate-700">
          <p>This notice explains how {SITE.org} uses the personal information you give us through this website.</p>
          <h2 className="text-xl font-bold">What we collect</h2>
          <p>
            When you send an enquiry we collect your name, email address, your answers to the form questions (such as country, organisation,
            level of study and timing) and your message.
          </p>
          <h2 className="text-xl font-bold">Why we use it</h2>
          <p>We use it only to reply to your enquiry and to plan the programme. We do not sell your information or use it for unrelated marketing.</p>
          <h2 className="text-xl font-bold">Who sees it</h2>
          <p>Members of the programme team. We use hosting and email providers to run the website, and they process data on our behalf.</p>
          <h2 className="text-xl font-bold">Your rights</h2>
          <p>
            You can ask to see, correct or delete your information, or object to how we use it, by emailing{" "}
            <a className="font-semibold text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            You can also complain to the Information Commissioner’s Office (ico.org.uk).
          </p>
          <p className="rounded-lg bg-gold-pale p-4 text-sm text-slate-600">
            This is a working notice for the enquiry form. A full retention schedule and data protection impact assessment will be added before student applications open.
          </p>
        </div>
      </Section>
    </>
  );
}
