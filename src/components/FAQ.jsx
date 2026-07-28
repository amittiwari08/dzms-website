import { useMemo, useRef, useState } from "react";
import { FAQ as FAQ_DATA } from "../data/faq.js";
import { useReveal } from "../hooks/useReveal.js";

function FaqItem({ item, open, onToggle }) {
  const answerRef = useRef(null);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 py-[22px] px-1 text-left text-base font-semibold"
      >
        <span>{item.q}</span>
        <span className="relative h-[22px] w-[22px] flex-none">
          <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-milano" />
          <span
            className={`absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded bg-milano transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : ""
            }`}
          />
        </span>
      </button>
      <div
        ref={answerRef}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? answerRef.current?.scrollHeight ?? 300 : 0 }}
      >
        <p className="max-w-[640px] px-1 pb-[22px] text-[14.5px] leading-relaxed text-muted">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [titleRef, titleIn] = useReveal();
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return FAQ_DATA;
    return FAQ_DATA.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="faq">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Questions</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          Everything you&apos;re probably wondering.
        </h2>

        <div className="mt-11 flex max-w-[440px] items-center gap-2.5 rounded-full border border-border px-[18px] py-3.5 text-muted">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question…"
            className="w-full bg-transparent text-[14.5px] text-ink outline-none placeholder:text-muted"
          />
        </div>

        <div className="mt-[30px] border-t border-border">
          {results.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        {results.length === 0 && (
          <p className="mt-[30px] text-[14.5px] text-muted">
            No questions match your search — try another term, or just ask us directly.
          </p>
        )}
      </div>
    </section>
  );
}
