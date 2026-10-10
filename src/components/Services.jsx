import { useState } from "react";
import { SERVICES } from "../data/services.js";
import { useReveal } from "../hooks/useReveal.js";
import Magnetic from "./Magnetic.jsx";
import ServiceIcon from "./ServiceIcon.jsx";

export default function Services() {
  const [active, setActive] = useState(0);
  const [titleRef, titleIn] = useReveal();
  const service = SERVICES[active];

  return (
    <section id="services" className="bg-chiffon">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">What We Do</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          Services Built Around Your Goals
        </h2>
        <p className="section-sub reveal-up in-view">
          From application development and cloud platforms to ERP, IT consulting, digital marketing, and SEO, we help businesses build and grow digitally.
        </p>

        <div className="mt-14 grid min-h-[460px] grid-cols-1 overflow-hidden rounded-[28px] border border-border bg-white md:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col border-b border-border md:border-b-0 md:border-r">
            {SERVICES.map((s, i) => (
              <button
                key={s.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between gap-3.5 border-b border-border px-6 py-5 text-left transition-all last:border-b-0 ${
                  active === i ? "bg-chiffon pl-8" : "hover:bg-chiffon hover:pl-8"
                }`}
              >
                <span className="flex items-center gap-3.5 text-[15.5px] font-semibold">
                  <span
                    className={`flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] transition-all ${
                      active === i ? "-rotate-6 scale-105 bg-milano text-white" : "bg-chiffon text-milano"
                    }`}
                  >
                    <ServiceIcon name={s.icon} className="h-[18px] w-[18px]" />
                  </span>
                  {s.name}
                </span>
                <span className={`text-milano transition-all ${active === i ? "opacity-100" : "opacity-0"}`}>→</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-center p-11">
            <span className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-chiffon text-milano">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-milano">{service.tag}</p>
            <h3 className="mb-3.5 text-[28px] font-bold">{service.name}</h3>
            <p className="mb-[22px] text-[15.5px] leading-relaxed text-muted">{service.desc}</p>
            <ul className="mb-7 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <li key={t} className="rounded-full border border-border bg-chiffon px-[13px] py-[7px] text-[13px]">
                  {t}
                </li>
              ))}
            </ul>
            <Magnetic>
              <a
                href="#contact"
                className="rounded-full bg-milano px-[26px] py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(169,14,2,0.55)] transition-all hover:-translate-y-0.5 hover:bg-milano-hover"
              >
                Discuss Your Project
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
