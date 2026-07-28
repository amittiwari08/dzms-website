const NAMES = [
  "Meridian Health", "Northgate Realty", "Verdant Foods", "Lucid Finance",
  "Bright Path Schools", "Aster Hotels", "Kestrel Logistics", "Foundry Legal"
];

export default function TrustStrip() {
  const doubled = [...NAMES, ...NAMES];
  return (
    <section className="!py-9 border-y border-border">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="mb-[22px] text-center text-xs uppercase tracking-wider text-muted">
          Trusted by teams across every industry we serve
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
