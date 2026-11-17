import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero } from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact and register interest" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Register your interest.">
        Students, families, universities and accommodation providers are all welcome. Tell us a little about yourself and we will reply personally.
      </PageHero>
      <section>
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_20rem]">
          <EnquiryForm />
          <aside className="space-y-6">
            <div className="card">
              <h2 className="text-lg font-bold">Email</h2>
              <p className="mt-2"><a className="font-semibold text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold">Office</h2>
              <p className="mt-2 text-slate-600">{SITE.org}<br />{SITE.location}</p>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold">What happens next</h2>
              <p className="mt-2 text-slate-600">We read every enquiry and reply to the email address you give. We will not add you to marketing lists.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
