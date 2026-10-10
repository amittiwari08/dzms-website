import { useReveal, useCountUp } from "../hooks/useReveal.js";
import Magnetic from "./Magnetic.jsx";

const STATS = [
  { value: 12, suffix: "", label: "Service capabilities" },
  { value: 3, suffix: "", label: "Featured projects" },
  { value: 7, suffix: "", label: "Delivery stages" },
  { value: 4, suffix: "", label: "Digital focus areas" }
];

function RevealLine({ children, delay = 0 }) {
  const [ref, inView] = useReveal(0.2);
  return (
    <span ref={ref} className={`reveal-line ${inView ? "in-view" : ""}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-head text-[34px] font-bold">{count}{suffix}</span>
      <span className="text-[13px] text-muted">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [subRef, subIn] = useReveal();
  const [actionsRef, actionsIn] = useReveal();
  const [statsRef, statsIn] = useReveal();

  function scrollToServices() {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-[150px] pb-[90px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-[140px] -right-[120px] h-[520px] w-[520px] animate-float-a rounded-full opacity-55 blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(169,14,2,0.28), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-[160px] -left-[140px] h-[460px] w-[460px] animate-float-b rounded-full opacity-55 blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(255,251,212,0.9), transparent 70%)" }}
        />
        <div className="grid-overlay absolute inset-0" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[920px] px-7 text-center">
        <p className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-border bg-chiffon px-4 py-[7px] text-[13px] font-semibold uppercase tracking-wider text-milano">
          Digital Solutions That Move Business Forward
        </p>

        <h1 className="font-head text-[clamp(38px,6.4vw,74px)] font-bold">
          <RevealLine>Powering Your</RevealLine>
          <br />
          <RevealLine delay={90}>
            <em className="not-italic text-milano">Digital Future</em>
          </RevealLine>
        </h1>

        <p
          ref={subRef}
          className={`reveal-up ${subIn ? "in-view" : ""} mx-auto mt-[26px] max-w-[600px] text-[17.5px] leading-relaxed text-muted`}
        >
          We combine technology, creativity, and business expertise to build digital solutions that help ambitious businesses grow, operate smarter, and stay ahead.
        </p>

        <div
          ref={actionsRef}
          className={`reveal-up ${actionsIn ? "in-view" : ""} mt-[38px] flex flex-wrap items-center justify-center gap-3.5`}
        >
          <Magnetic>
            <a
              href="#services"
              className="rounded-full bg-milano px-8 py-[17px] text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(169,14,2,0.55)] transition-all hover:-translate-y-0.5 hover:bg-milano-hover"
            >
              Explore Our Services
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-[17px] text-base font-semibold transition-all hover:-translate-y-0.5 hover:border-ink"
            >
              <span>Start A Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
        </div>

        <div
          ref={statsRef}
          className={`reveal-up ${statsIn ? "in-view" : ""} mt-[70px] grid grid-cols-2 gap-2.5 border-t border-border pt-9 sm:grid-cols-4`}
        >
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-[34px] left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-muted"
        aria-label="Scroll down"
      >
        <span className="relative h-[34px] w-px overflow-hidden bg-gradient-to-b from-milano to-transparent">
          <span className="absolute left-0 top-[-100%] h-full w-full animate-scroll-move bg-milano" />
        </span>
        Scroll
      </button>
    </section>
  );
}
