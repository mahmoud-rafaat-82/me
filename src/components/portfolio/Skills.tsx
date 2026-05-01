import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";

interface Skill { name: string; level: number; category: string; }

const groupLabels: Record<string, string> = {
  design: "Design",
  video: "Video & Motion",
};

export const Skills = ({ skills }: { skills: Skill[] }) => {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  return (
    <Section id="skills">
      <FadeIn>
        <span className="eyebrow">03 — Tools of the Craft</span>
        <h2 className="section-title mt-3">Skills</h2>
        <span className="gold-line mt-4" />
      </FadeIn>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        {Object.entries(grouped).map(([cat, list]) => (
          <FadeIn key={cat}>
            <h3 className="font-serif text-2xl text-primary">{groupLabels[cat] ?? cat}</h3>
            <div className="mt-6 space-y-6">
              {list.map((s) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-foreground/80">{s.name}</span>
                    <span className="text-xs uppercase tracking-widest text-accent">{s.level}/5</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(s.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px bg-accent"
                      style={{ marginTop: -1, height: 2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
