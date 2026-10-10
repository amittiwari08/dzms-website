import { useReveal } from "../hooks/useReveal.js";
import Magnetic from "./Magnetic.jsx";

const PLANS = [
  {
    name: "Website Launch", value: "₹15,000", note: "starting",
    desc: "A professional digital presence for a business getting online or refreshing an existing site.",
    features: ["Responsive website experience", "Clear service and contact information", "SEO-friendly page structure", "Domain and launch guidance"],
    cta: "Get a Website Quote", featured: false
  },
  {
    name: "Custom Solutions", value: "Custom", note: "project quote", badge: "Tailored to your needs",
    desc: "A website, mobile app, portal, or business system planned around your workflows and users.",
    features: ["Custom functionality and integrations", "Application and data architecture", "Deployment planning", "Scope-based delivery milestones"],
    cta: "Discuss Your Project", featured: true
  },
  {
    name: "Cloud & Business Systems", value: "Custom", note: "project quote",
    desc: "Cloud applications, ERP, IT consulting, or connected systems for more complex requirements.",
    features: ["Requirements and solution planning", "Cloud or business-system setup", "Security and reliability considerations", "Maintenance options by agreement"],
    cta: "Book a Consultation", featured: false
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
          Clear starting prices. Custom scope where needed.
        </h2>
        <p className="section-sub reveal-up in-view">
          Website projects start at ₹15,000. Applications, ERP, cloud, and other custom work are estimated after we understand your requirements.
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
