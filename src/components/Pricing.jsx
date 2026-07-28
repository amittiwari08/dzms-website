import { useReveal } from "../hooks/useReveal.js";
import Magnetic from "./Magnetic.jsx";

const PLANS = [
  {
    name: "Launch", value: "₹49,000", note: "starting",
    desc: "A polished website for businesses getting online the right way.",
    features: ["Up to 6 pages, custom designed", "Mobile-first & SEO-ready", "Basic hosting setup", "2 weeks of post-launch support"],
    cta: "Get Free Quote", featured: false
  },
  {
    name: "Scale", value: "₹1,49,000", note: "starting", badge: "Most Popular",
    desc: "Web or mobile app with custom features, built to grow with you.",
    features: ["Custom web or mobile application", "API & database architecture", "Cloud deployment & DevOps setup", "90 days of dedicated support"],
    cta: "Get Free Quote", featured: true
  },
  {
    name: "Transform", value: "Custom", note: "scoped",
    desc: "End-to-end SaaS, AI or enterprise builds with ongoing partnership.",
    features: ["Full product & platform builds", "AI & automation integration", "Dedicated pod & account team", "Ongoing growth & maintenance"],
    cta: "Book Free Consultation", featured: false
  }
];

function PlanCard({ plan }) {
  const [ref, inView] = useReveal();
  const base = "reveal-up rounded-[28px] border p-9 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5";
  const theme = plan.featured
    ? "border-ink bg-ink text-white shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)] lg:scale-[1.03]"
    : "border-border hover:shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)]";

  return (
    <div ref={ref} className={`${base} ${theme} ${inView ? "in-view" : ""} relative`}>
      {plan.badge && (
        <p className="absolute -top-[13px] left-[30px] rounded-full bg-milano px-3.5 py-[5px] text-[11.5px] font-bold text-white">
          {plan.badge}
        </p>
      )}
      <p className="font-head text-xl font-bold">{plan.name}</p>
      <p className="font-head text-[30px] font-bold">
        {plan.value}
        <span className={`ml-1.5 font-body text-[13px] font-medium ${plan.featured ? "text-white/55" : "text-muted"}`}>
          {plan.note}
        </span>
      </p>
      <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/65" : "text-muted"}`}>{plan.desc}</p>
      <ul className="flex flex-1 flex-col gap-[11px]">
        {plan.features.map((f) => (
          <li key={f} className="relative pl-5 text-[13.5px]">
            <span className={`absolute left-0 font-bold ${plan.featured ? "text-chiffon" : "text-milano"}`}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Magnetic className="w-full">
        <a
          href="#contact"
          className={`w-full rounded-full px-6 py-3.5 text-center text-[15px] font-semibold transition-all ${
            plan.featured
              ? "bg-milano text-white hover:bg-milano-hover"
              : "border-[1.5px] border-milano text-milano hover:bg-milano hover:text-white"
          }`}
        >
          {plan.cta}
        </a>
      </Magnetic>
    </div>
  );
}

export default function Pricing() {
  const [titleRef, titleIn] = useReveal();
  return (
    <section id="pricing">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Investment</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          Straightforward plans. No hidden scope.
        </h2>
        <p className="section-sub reveal-up in-view">
          Every engagement is scoped to your business — these are starting points, not the ceiling.
        </p>

        <div className="mt-[54px] grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
