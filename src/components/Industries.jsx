import { useState } from "react";
import { INDUSTRIES } from "../data/industries.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Industries() {
  const [active, setActive] = useState(0);
  const [titleRef, titleIn] = useReveal();

  return (
    <section id="industries">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Industries We Serve</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          Digital solutions tailored to the way your industry works.
        </h2>
        <p className="section-sub reveal-up in-view">
          Explore the digital services that can support your workflows, customers, and growth goals.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.name}
              type="button"
              onClick={() => setActive(i)}
              className={`flex flex-col items-start gap-2.5 rounded-2xl border px-[22px] py-[22px] text-left transition-all hover:-translate-y-1 ${
                active === i ? "border-ink bg-ink" : "border-border hover:border-milano"
              }`}
            >
              <span
                className={`flex h-[38px] w-[38px] items-center justify-center rounded-[10px] ${
                  active === i ? "bg-milano text-white" : "bg-chiffon text-milano"
                }`}
              >
                {ind.icon}
              </span>
              <span className={`text-[15px] font-semibold ${active === i ? "text-white" : "text-ink"}`}>
                {ind.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-[34px] rounded-2xl border border-border bg-chiffon px-[30px] py-[26px]">
          <p className="mb-3 text-[12.5px] uppercase tracking-wider text-muted">Recommended for you</p>
          <div className="flex flex-wrap gap-2.5">
            {INDUSTRIES[active].services.map((s) => (
              <span key={s} className="rounded-full border border-border bg-white px-[15px] py-2 text-[13.5px] font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
