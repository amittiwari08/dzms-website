import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal.js";

const STEPS = [
  { index: "01", title: "Discovery", desc: "We learn your business, your customers and what success actually looks like for you." },
  { index: "02", title: "Planning", desc: "Scope, architecture and roadmap — so there are no surprises once we start building." },
  { index: "03", title: "Design", desc: "Interfaces that feel premium and match how your customers actually think and browse." },
  { index: "04", title: "Development", desc: "Clean, scalable engineering — built on modern frameworks, reviewed at every step." },
  { index: "05", title: "Testing", desc: "Cross-device QA, performance passes and security checks before anything ships." },
  { index: "06", title: "Deployment", desc: "Hosting, domains and infrastructure configured and handed to you, fully documented." },
  { index: "07", title: "Growth", desc: "SEO, analytics and ongoing support so what we built keeps performing after launch." }
];

function TimelineStep({ step }) {
  const [ref, inView] = useReveal(0.5);
  return (
    <div ref={ref} className="relative pt-9 pl-9 md:pl-0 md:pt-9">
      <div
        className={`absolute left-0 top-0.5 h-5 w-5 rounded-full border-2 transition-all md:top-0 ${
          inView ? "scale-110 border-milano bg-milano" : "border-white/25 bg-ink"
        }`}
      />
      <p className="mb-2 font-head text-xs font-bold text-milano">{step.index}</p>
      <h3 className="mb-2 text-[17px] font-semibold">{step.title}</h3>
      <p className="text-[13.5px] leading-relaxed text-white/55">{step.desc}</p>
    </div>
  );
}

export default function Process() {
  const [titleRef, titleIn] = useReveal();
  const timelineRef = useRef(null);
  const [fillPct, setFillPct] = useState(0);
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    function update() {
      const el = timelineRef.current;
      if (!el) return;
      const isVertical = window.innerWidth <= 960;
      setVertical(isVertical);
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progressed = Math.min(Math.max((vh * 0.75 - rect.top) / rect.height, 0), 1);
      setFillPct(progressed * 100);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="process" className="bg-ink text-white">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view border-white/15 !bg-white/10 !text-chiffon">How We Work</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          A process built for clarity, from kickoff to growth.
        </h2>

        <div ref={timelineRef} className="relative mt-[70px] grid grid-cols-1 gap-[34px] md:grid-cols-7 md:gap-[18px]">
          <div
            className={
              vertical
                ? "absolute left-[9px] top-0 bottom-0 w-0.5 bg-white/15"
                : "absolute left-0 right-0 top-[9px] h-0.5 bg-white/15"
            }
          >
            <span
              className="block bg-milano transition-all duration-150"
              style={
                vertical
                  ? { height: `${fillPct}%`, width: "100%" }
                  : { width: `${fillPct}%`, height: "100%" }
              }
            />
          </div>
          {STEPS.map((step) => (
            <TimelineStep key={step.index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
