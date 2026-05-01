import { GraduationCap } from "lucide-react";
import { Section, FadeIn } from "./Section";

interface Edu {
  degree: string; field: string; institution: string; location: string; period: string;
}

export const Education = ({ items }: { items: Edu[] }) => (
  <Section id="education">
    <FadeIn>
      <span className="eyebrow">06 — Background</span>
      <h2 className="section-title mt-3">Education</h2>
      <span className="gold-line mt-4" />
    </FadeIn>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {items.map((e) => (
        <FadeIn key={e.degree + e.institution}>
          <div className="flex gap-6 border border-border bg-card p-8">
            <GraduationCap className="h-8 w-8 shrink-0 text-accent" strokeWidth={1.5} />
            <div>
              <h3 className="font-serif text-xl text-primary">{e.degree} — {e.field}</h3>
              <p className="mt-2 text-sm text-foreground/70">{e.institution} · {e.location}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent">{e.period}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);
