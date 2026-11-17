import { AI_HELPERS, TEAM } from "@/lib/team";
import { Section } from "@/components/Section";

export default function Team() {
  return (
    <Section
      tone="soft"
      eyebrow="Who runs the programme"
      title="A small team, with clear responsibility for every decision."
      intro="We keep the team small on purpose. Named people make every decision that matters, and AI assistants take care of repetitive checking and drafting."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {TEAM.map((p) => (
          <article key={p.name} className="card">
            {p.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.photo} alt={`${p.name}, ${p.role}`} className="h-20 w-20 rounded-full object-cover" />
            ) : (
              <div aria-hidden className="grid h-20 w-20 place-items-center rounded-full bg-navy font-heading text-2xl font-extrabold text-gold">
                {p.name.charAt(0)}
              </div>
            )}
            <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
            <p className="text-sm font-semibold text-gold-dark">{p.role}</p>
            <p className="mt-3 leading-relaxed text-slate-600">{p.does}</p>
            <p className="mt-3 text-xs text-slate-400">{p.bio ? p.bio : "Photo and bio coming soon"}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-navy p-8 text-white shadow-lift">
        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <p className="eyebrow">AI assistants</p>
            <h3 className="mt-2 text-xl font-bold !text-white">Tools that help the team, never decide for it.</h3>
          </div>
          <div>
            <ul className="space-y-2 text-white/85">
              {AI_HELPERS.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/70">
              A named person approves, edits or rejects everything an assistant produces. The assistants never contact students or families on their own.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
