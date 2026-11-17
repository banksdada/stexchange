import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold !text-white sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "white" | "soft";
}) {
  return (
    <section className={tone === "soft" ? "bg-gold-pale" : "bg-white"}>
      <div className="container-x py-16 sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="mt-2 max-w-3xl text-2xl font-extrabold sm:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>}
        <div className={title || intro ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <svg className="mt-1 h-5 w-5 flex-none text-gold-dark" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function Cta({ title, text, href = "/contact", label = "Register your interest" }: { title: string; text: string; href?: string; label?: string }) {
  return (
    <section className="bg-navy">
      <div className="container-x py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold !text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{text}</p>
        <a href={href} className="btn-gold mt-8">{label}</a>
      </div>
    </section>
  );
}
