interface Props { name: string; title: string; }
export const Footer = ({ name, title }: Props) => (
  <footer className="bg-navy-deep text-background/60 py-8">
    <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-3 text-xs uppercase tracking-[0.2em]">
      <span><span className="text-accent">{name}</span> · {title}</span>
      <span>© {new Date().getFullYear()} · All rights reserved</span>
    </div>
  </footer>
);
