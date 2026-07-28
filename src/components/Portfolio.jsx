import { PORTFOLIO } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";
import WorkIcon from "./WorkIcon.jsx";

/**
 * A stylized "browser window" mockup — traffic-light dots, an address bar
 * showing the real domain, and a hero-style screen built from the client's
 * actual brand color + an icon matching their industry. This replaces the
 * old generic laptop with blank gray bars (which looked the same for every
 * card and empty on top of that).
 */
function BrowserMockup({ p }) {
  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-ink/10 bg-[#F5F3EC] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-2 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-muted">
          {p.domain}
        </div>
      </div>

      {/* "Screen" content, built from the brand's real accent color */}
      <div
        className="relative flex h-[150px] flex-col items-center justify-center gap-3 overflow-hidden px-6"
        style={{ background: `linear-gradient(160deg, ${p.accent}14, ${p.accent}05)` }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-10 h-28 w-28 rounded-full opacity-20 blur-xl"
          style={{ background: p.accent }}
        />
        <span
          className="flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{ background: p.accent }}
        >
          <WorkIcon name={p.icon} className="h-5 w-5 text-white" />
        </span>
        <div className="flex w-full max-w-[160px] flex-col items-center gap-1.5">
          <span className="h-1.5 w-3/4 rounded-full" style={{ background: `${p.accent}55` }} />
          <span className="h-1.5 w-1/2 rounded-full bg-ink/10" />
        </div>
        <span
          className="rounded-full px-4 py-1 text-[10px] font-semibold text-white"
          style={{ background: p.accent }}
        >
          Visit site
        </span>
      </div>
    </div>
  );
}

function Card({ p }) {
  const [ref, inView] = useReveal();
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`reveal-up ${inView ? "in-view" : ""} group block overflow-hidden rounded-[28px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(17,17,17,0.22)]`}
    >
      <BrowserMockup p={p} />
      <span className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-milano">{p.tag}</span>
      <h3 className="mb-1.5 text-[19px] font-bold">{p.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted">{p.desc}</p>
      <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-milano transition-transform group-hover:gap-2.5">
        Visit live site
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

export default function Portfolio() {
  const [titleRef, titleIn] = useReveal();
  return (
    <section id="portfolio">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Selected Work</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          A glimpse of what we've shipped.
        </h2>
        <p className="section-sub reveal-up in-view">
          Real client projects we've built and launched — click through to see them live.
        </p>

        <div className="mt-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
