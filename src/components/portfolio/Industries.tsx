export const Industries = ({ industries }: { industries: string[] }) => {
  const loop = [...industries, ...industries];
  return (
    <section className="bg-navy-deep py-10 overflow-hidden">
      <div className="flex w-max marquee gap-3">
        {loop.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="border border-accent/40 bg-navy/40 px-5 py-2 text-sm uppercase tracking-[0.2em] text-accent whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
