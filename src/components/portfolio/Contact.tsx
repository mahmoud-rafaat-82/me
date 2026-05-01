import { Phone, MapPin, ExternalLink, Linkedin, MessageCircle } from "lucide-react";
import { FadeIn } from "./Section";

interface Props {
  phones: string[];
  behance: string;
  linkedin: string;
  whatsapp: string;
  location: string;
}

export const Contact = ({ phones, behance, linkedin, whatsapp, location }: Props) => {
  const waDigits = whatsapp.replace(/\D/g, "");
  return (
  <section id="contact" className="bg-navy text-background py-28 md:py-40">
    <div className="container-editorial text-center">
      <FadeIn>
        <span className="eyebrow">07 — Let's Talk</span>
        <h2 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-background leading-tight">
          Let's Create Something <span className="italic text-accent">Great</span>
        </h2>
        <span className="mx-auto mt-8 block h-px w-24 bg-accent" />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-left">
          <div>
            <p className="eyebrow">Location</p>
            <p className="mt-3 flex items-start gap-2 text-background/85">
              <MapPin className="h-4 w-4 mt-1 text-accent" /> {location}
            </p>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <ul className="mt-3 space-y-1.5">
              {phones.map((p) => {
                const isWa = p.replace(/\D/g, "") === waDigits;
                return (
                  <li key={p}>
                    <a
                      href={isWa ? `https://wa.me/${waDigits}` : `tel:${p.replace(/\s/g, "")}`}
                      target={isWa ? "_blank" : undefined}
                      rel={isWa ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-background/85 hover:text-accent transition-colors"
                    >
                      {isWa ? <MessageCircle className="h-4 w-4 text-accent" /> : <Phone className="h-4 w-4 text-accent" />}
                      {p}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="eyebrow">LinkedIn</p>
            <a href={linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-background/85 hover:text-accent transition-colors">
              <Linkedin className="h-4 w-4 text-accent" /> Connect
            </a>
          </div>
          <div>
            <p className="eyebrow">Portfolio</p>
            <a href={behance} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-background/85 hover:text-accent transition-colors">
              <ExternalLink className="h-4 w-4 text-accent" /> Behance
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
  );
};
