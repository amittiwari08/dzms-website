const NAMES = [
  "IT Application Development",
  "Cloud Applications",
  "ERP & Business Systems",
  "IT Consulting",
  "Digital Marketing",
  "SEO & Search Indexing",
  "UI/UX Design",
  "IT Technical Management"
];

export default function TrustStrip() {
  const doubled = [...NAMES, ...NAMES];
  return (
    <section className="!py-9 border-y border-border">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="mb-[22px] text-center text-xs uppercase tracking-wider text-muted">
          Digital services to support your business at every stage
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {doubled.map((name, i) => (
              <span key={i} className="whitespace-nowrap font-head text-[17px] font-semibold text-ink opacity-45">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
