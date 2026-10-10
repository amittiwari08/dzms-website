import { TECH } from "../data/tech.js";
import { useReveal } from "../hooks/useReveal.js";

function TechItem({ t }) {
  return (
    <div className="group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-[10px] border border-border px-3.5 py-5 text-center transition-all hover:-translate-y-1 hover:border-milano">
      <span className="font-head text-[15px] font-bold text-milano">{t.glyph}</span>
      <span className="text-[12.5px] font-semibold">{t.label}</span>
      <span className="max-h-0 overflow-hidden text-[11px] leading-tight text-muted opacity-0 transition-all duration-300 group-hover:max-h-14 group-hover:opacity-100">
        {t.desc}
      </span>
    </div>
  );
}

export default function TechStack() {
  const [titleRef, titleIn] = useReveal();
  return (
    <section>
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Tools & Technologies</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          Practical technology choices for reliable digital products.
        </h2>

        <div className="mt-[50px] grid grid-cols-3 gap-3 sm:grid-cols-6">
          {TECH.map((t) => (
            <TechItem key={t.label} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
