import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import portrait from "@/assets/mahmoud.jpg";

interface Props {
  name: string;
  title: string;
  tagline: string;
  initials: string;
}

export const Hero = ({ name, title, tagline, initials }: Props) => {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-20">
      <div className="container-editorial grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Portfolio · Est. 2010
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-primary"
          >
            {name}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 h-px w-32 origin-left bg-accent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg md:text-xl text-foreground/70 font-light"
          >
            {title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 font-serif italic text-accent text-lg md:text-xl"
          >
            {tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-3 rounded-full border border-accent/40" aria-hidden />
          <div className="relative h-64 w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full bg-card shadow-xl ring-1 ring-accent/30">
            <img
              src={portrait}
              alt={`Portrait of ${name}`}
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 font-serif text-xs tracking-[0.2em] text-accent">
            {initials}
          </div>
        </motion.div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent bounce-slow"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};
