import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-white">{SITE.org}</p>
          <p className="mt-1 text-sm text-gold">{SITE.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A structured, safeguarded UK study-and-experience placement for final-year Ghanaian university students.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-gold">{n.label}</Link></li>
            ))}
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-white">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.org}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-gold">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}
