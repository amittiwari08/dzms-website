import { TESTIMONIALS } from "../data/testimonials.js";

function Card({ t }) {
  return (
    <div className="w-[340px] flex-none rounded-2xl border border-white/70 bg-white/65 p-7 shadow-[0_20px_44px_-28px_rgba(17,17,17,0.25)] backdrop-blur-md">
      <div className="mb-3.5 text-sm tracking-widest text-milano">★★★★★</div>
      <p className="mb-5 text-[14.5px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-milano font-head text-[13px] font-bold text-white">
          {t.initials}
        </div>
        <div>
          <div className="text-[13.5px] font-semibold">{t.name}</div>
          <div className="text-xs text-muted">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="bg-chiffon !pb-[100px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="eyebrow reveal-up in-view">Client Voices</p>
        <h2 className="section-title reveal-up in-view">Don&apos;t just take our word for it.</h2>
      </div>

      <div className="mt-[50px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-[22px] hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
