import { useReveal } from "../hooks/useReveal.js";

const OTHERS = ["Unclear scope and expectations", "Disconnected tools and workflows", "Mobile experience overlooked", "Search visibility considered late", "Limited handover after launch"];
const US = ["Agreed scope and milestones", "Solutions shaped around workflows", "Responsive design across devices", "SEO and performance foundations", "Deployment guidance and support options"];

export default function Compare() {
  const [titleRef, titleIn] = useReveal();
  const [tableRef, tableIn] = useReveal();

  return (
    <section>
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Why DZ Marketing Solutions</p>
        <h2 ref={titleRef} className={`section-title reveal-up ${titleIn ? "in-view" : ""}`}>
          A practical, connected approach to your digital goals.
        </h2>

        <div
          ref={tableRef}
          className={`reveal-up ${tableIn ? "in-view" : ""} mt-[50px] grid grid-cols-1 overflow-hidden rounded-[28px] border border-border sm:grid-cols-2`}
        >
          <div className="bg-white px-[38px] py-10">
            <p className="mb-6 font-head text-[19px] font-bold">Common Project Challenges</p>
            <ul>
              {OTHERS.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-black/5 py-3 text-[15px] last:border-b-0">
                  <span className="font-bold text-[#c4c4c4]">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink px-[38px] py-10 text-white">
            <p className="mb-6 font-head text-[19px] font-bold">Our Approach</p>
            <ul>
              {US.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-[15px] last:border-b-0">
                  <span className="font-bold text-chiffon">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
