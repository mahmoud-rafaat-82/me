import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
          className="hidden md:flex h-56 w-56 lg:h-64 lg:w-64 items-center justify-center rounded-full border border-accent/40 bg-card shadow-sm"
        >
          <div className="flex h-44 w-44 lg:h-52 lg:w-52 items-center justify-center rounded-full bg-primary text-background">
            <span className="font-serif text-6xl lg:text-7xl text-accent">{initials}</span>
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
