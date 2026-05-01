import { FadeIn } from "./Section";

interface Stat { label: string; value: string; }

export const Stats = ({ stats }: { stats: Stat[] }) => (
  <section id="stats" className="bg-navy text-background">
    <div className="container-editorial grid grid-cols-2 md:grid-cols-4 divide-x divide-accent/30 py-16">
      {stats.map((s, i) => (
        <FadeIn key={s.label} delay={i * 0.08} className="px-6 text-center first:pl-0 last:pr-0">
          <div className="font-serif text-4xl md:text-5xl text-accent">{s.value}</div>
          <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-background/70">
            {s.label}
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);
