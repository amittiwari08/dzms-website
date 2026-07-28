import { useEffect, useState } from "react";
import Magnetic from "./Magnetic.jsx";
import Logo from "./Logo.jsx";

const MEGA = [
  { heading: "Build", links: ["Website Development", "Mobile App Development", "Custom Software", "SaaS Development"] },
  { heading: "Grow", links: ["AI Solutions & Automation", "SEO & Indexing", "Digital Marketing", "Branding & UI/UX"] },
  { heading: "Run", links: ["Cloud & DevOps", "Hosting & Domains", "Maintenance & Support", "Performance Optimization"] }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 border-b ${
        scrolled
          ? "py-3 bg-white/75 backdrop-blur-md border-border"
          : "py-5 border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-7">
        <a href="#home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex">
          <div className="group relative">
            <button className="rounded-full px-[15px] py-[9px] text-[14.5px] font-medium transition-colors hover:bg-chiffon hover:text-milano-hover">
              Services
            </button>
            <div className="absolute left-1/2 top-[calc(100%+14px)] w-[560px] -translate-x-1/2 translate-y-2 grid grid-cols-3 gap-[22px] rounded-2xl border border-border bg-white p-[26px] opacity-0 invisible pointer-events-none shadow-[0_30px_60px_-20px_rgba(17,17,17,0.18)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
              {MEGA.map((col) => (
                <div key={col.heading}>
                  <p className="mb-2.5 text-xs uppercase tracking-wider text-muted">{col.heading}</p>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#services"
                      className="block py-1.5 text-sm transition-all hover:translate-x-1 hover:text-milano"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {["Industries", "Process", "Work", "Pricing", "FAQ"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase() === "work" ? "portfolio" : label.toLowerCase()}`}
              className="rounded-full px-[15px] py-[9px] text-[14.5px] font-medium transition-colors hover:bg-chiffon hover:text-milano-hover"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Magnetic>
            <a
              href="#contact"
              className="rounded-full bg-milano px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(169,14,2,0.55)] transition-all hover:-translate-y-0.5 hover:bg-milano-hover"
            >
              Start Your Project
            </a>
          </Magnetic>
        </div>

        <button
          className="flex w-6 flex-col gap-[5px] lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="h-0.5 rounded bg-ink" />
          <span className="h-0.5 rounded bg-ink" />
          <span className="h-0.5 rounded bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-b border-border bg-chiffon px-6 py-4 lg:hidden">
          {["Services", "Industries", "Process", "Work", "Pricing", "FAQ"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase() === "work" ? "portfolio" : label.toLowerCase()}`}
              className="py-2 text-[15px] font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-milano px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Start Your Project
          </a>
        </div>
      )}
    </header>
  );
}
