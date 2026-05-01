import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props {
  id?: string;
  className?: string;
}

export const FadeIn = ({ children, className, delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({ id, className = "", children }: PropsWithChildren<Props>) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="container-editorial">{children}</div>
  </section>
);
