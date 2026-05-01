import { Section, FadeIn } from "./Section";

interface Exp {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: string;
  responsibilities: string[];
  location?: string;
  industry?: string;
}

export const Experience = ({ items }: { items: Exp[] }) => (
  <Section id="experience" className="bg-secondary/40">
    <FadeIn>
      <span className="eyebrow">04 — Career</span>
      <h2 className="section-title mt-3">Experience</h2>
      <span className="gold-line mt-4" />
    </FadeIn>

    <div className="mt-14 relative pl-8 md:pl-12">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-accent/50" />
      {items.map((e) => (
        <FadeIn key={e.id}>
          <div className="relative">
            <div className="absolute -left-[34px] md:-left-[50px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl text-primary">{e.role}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">{e.duration}</span>
            </div>
            <p className="mt-1 text-sm text-foreground/60 italic">
              {e.company} · {([e.location, e.industry].filter(Boolean).join(' · ') || e.type)}
            </p>

            <ul className="mt-6 space-y-2.5">
              {e.responsibilities.map((r) => (
                <li key={r} className="relative pl-5 text-sm text-foreground/75 leading-relaxed">
                  <span className="absolute left-0 top-2 h-px w-3 bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);
