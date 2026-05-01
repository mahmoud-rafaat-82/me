import { useEffect, useState } from "react";

interface Props {
  name: string;
  available: boolean;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ name, available }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <a href="#top" className={`font-serif text-xl md:text-2xl tracking-wide ${scrolled ? "text-background" : "text-primary"}`}>
          {name}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                scrolled ? "text-background/80" : "text-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          {available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Available
            </span>
          )}
        </nav>
      </div>
    </header>
  );
};
