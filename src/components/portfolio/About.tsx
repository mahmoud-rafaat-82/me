import { MapPin, Phone, ExternalLink, Quote } from "lucide-react";
import { Section, FadeIn } from "./Section";

interface Props {
  about: string;
  location: string;
  phones: string[];
  behance: string;
}

export const About = ({ about, location, phones, behance }: Props) => (
  <Section id="about">
    <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
      <FadeIn>
        <span className="eyebrow">01 — Introduction</span>
        <h2 className="section-title mt-3">About Me</h2>
        <span className="gold-line mt-4" />
        <div className="relative mt-8">
          <Quote className="absolute -left-2 -top-4 h-12 w-12 text-accent/30" strokeWidth={1} />
          <p className="relative pl-10 text-lg leading-relaxed text-foreground/80 font-light">
            {about}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="border border-border bg-card p-8">
          <h3 className="font-serif text-2xl text-primary">Get in touch</h3>
          <span className="gold-line mt-3" />

          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span className="text-foreground/80">{location}</span>
            </li>
            {phones.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="text-foreground/80 hover:text-accent transition-colors">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <ExternalLink className="mt-0.5 h-4 w-4 text-accent" />
              <a href={behance} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-accent transition-colors break-all">
                Behance Portfolio
              </a>
            </li>
          </ul>
        </div>
      </FadeIn>
    </div>
  </Section>
);
