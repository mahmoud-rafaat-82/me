import { Layers, Award, TrendingUp, Film, Share2, Zap, LucideIcon, Sparkles } from "lucide-react";
import { Section, FadeIn } from "./Section";

interface Item { id: number; title: string; description: string; icon: string; }

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  award: Award,
  "trending-up": TrendingUp,
  film: Film,
  "share-2": Share2,
  zap: Zap,
};

export const Expertise = ({ items }: { items: Item[] }) => (
  <Section id="expertise" className="bg-secondary/40">
    <FadeIn>
      <span className="eyebrow">02 — Capabilities</span>
      <h2 className="section-title mt-3">What I Do</h2>
      <span className="gold-line mt-4" />
    </FadeIn>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = iconMap[item.icon] ?? Sparkles;
        return (
          <FadeIn key={item.id} delay={i * 0.06}>
            <div className="group h-full border border-border bg-card p-8 transition-all duration-300 hover:border-l-4 hover:border-l-primary hover:shadow-md">
              <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.description}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </Section>
);
