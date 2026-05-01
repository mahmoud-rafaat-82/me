import { useState } from "react";
import { Section, FadeIn } from "./Section";

interface Client { name: string; industry: string; city?: string; }
interface Props { egypt: Client[]; libya: Client[]; }

const tabs = [
  { key: "egypt", label: "Egypt" },
  { key: "libya", label: "Libya" },
] as const;

export const Clients = ({ egypt, libya }: Props) => {
  const [active, setActive] = useState<"egypt" | "libya">("egypt");
  const list = active === "egypt" ? egypt : libya;

  return (
    <Section id="clients">
      <FadeIn>
        <span className="eyebrow">05 — Selected Partners</span>
        <h2 className="section-title mt-3">Trusted By</h2>
        <span className="gold-line mt-4" />
      </FadeIn>

      <div className="mt-10 flex gap-2 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative px-5 py-3 text-sm uppercase tracking-[0.2em] transition-colors ${
              active === t.key ? "text-primary" : "text-foreground/50 hover:text-foreground/80"
            }`}
          >
            {t.label}
            {active === t.key && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />}
          </button>
        ))}
      </div>

      <FadeIn key={active}>
        <div className="mt-10 flex flex-wrap gap-3">
          {list.map((c) => (
            <div
              key={c.name}
              className="group flex items-center gap-3 border border-border bg-card px-5 py-3 transition-all hover:border-accent hover:shadow-sm"
            >
              <span className="font-serif text-lg text-primary">{c.name}</span>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-accent-foreground/70">
                {c.industry}
              </span>
              {c.city && <span className="text-xs text-foreground/50">· {c.city}</span>}
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
