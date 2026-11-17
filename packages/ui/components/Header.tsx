"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded focus:bg-gold focus:px-3 focus:py-2">
        Skip to main content
      </a>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold font-heading text-sm font-extrabold text-navy">BJK</span>
          <span className="leading-tight">
            <span className="block font-heading text-sm font-bold text-white">{SITE.org}</span>
            <span className="block text-[11px] text-white/60">{SITE.name}</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-white/80 transition hover:text-gold">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold !py-2">Register interest</Link>
        </nav>
        <button
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-navy lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-white/90 hover:bg-white/5">
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2">Register interest</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
