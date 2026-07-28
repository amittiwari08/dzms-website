import { useState } from "react";
import Logo from "./Logo.jsx";

const FOOTER_COLS = [
  { heading: "Company", links: ["About", "Our Process", "Work", "FAQ"], hrefs: ["#home", "#process", "#portfolio", "#faq"] },
  { heading: "Services", links: ["Website Development", "App Development", "AI & Automation", "Cloud & DevOps"], hrefs: ["#services", "#services", "#services", "#services"] },
  { heading: "Industries", links: ["Healthcare", "Education", "Real Estate", "Retail & Ecommerce"], hrefs: ["#industries", "#industries", "#industries", "#industries"] }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function onSubscribe(e) {
    e.preventDefault();
    setNote("Thanks — you're subscribed.");
    setEmail("");
  }

  return (
    <footer className="bg-ink pt-20 text-white/75">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-10 border-b border-white/10 px-7 pb-[60px] sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <a href="#home">
            <Logo variant="light" />
          </a>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-relaxed text-white/50">
            A digital transformation partner for businesses of every kind — from first-time founders to established enterprises.
          </p>
          <div className="mt-[22px] flex gap-2.5">
            {["in", "X", "ig", "dr"].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold transition-colors hover:border-milano hover:bg-milano"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <p className="mb-[18px] text-xs uppercase tracking-wider text-white/40">{col.heading}</p>
            {col.links.map((link, i) => (
              <a key={link} href={col.hrefs[i]} className="block py-1.5 text-sm transition-colors hover:text-chiffon">
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <p className="mb-[18px] text-xs uppercase tracking-wider text-white/40">Stay in the loop</p>
          <p className="mb-4 text-[13.5px] text-white/50">Occasional notes on what we&apos;re building. No spam.</p>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[13.5px] text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-milano transition-colors hover:bg-milano-hover"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
          <p className="mt-2.5 min-h-[16px] text-[12.5px] text-chiffon">{note}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2.5 px-7 py-6 text-[12.5px] text-white/40">
        <p>© 2026 DZMS Digital Transformation Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
