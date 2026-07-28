import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useReveal } from "../hooks/useReveal.js";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, NOTIFY_EMAILS } from "../emailConfig.js";

const TOTAL_STEPS = 8;
const SERVICE_OPTIONS = ["Website", "App", "SEO", "Marketing", "AI", "Cloud", "Branding", "Software"];
const BUSINESS_OPTIONS = ["Startup", "Company", "Restaurant", "Hospital", "School", "Agency", "Other"];
const TIMELINE_OPTIONS = ["ASAP", "2 Weeks", "1 Month", "Flexible"];

const EMPTY_DATA = {
  service: null,
  businessType: null,
  budget: 150000,
  customBudget: false,
  customAmount: "",
  timeline: null,
  description: "",
  files: [],
  name: "",
  company: "",
  email: "",
  phone: "",
  country: ""
};

function formatINR(n) {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

function OptionGrid({ options, selected, onSelect, cols = "grid-cols-2" }) {
  return (
    <div className={`grid ${cols} gap-3`}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={`rounded-[10px] border px-4 py-4 text-left text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-milano ${
            selected === opt ? "border-milano bg-milano text-white" : "border-border"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function FileRow({ file }) {
  const [progress, setProgress] = useState(0);
  const startedRef = useRef(false);

  if (!startedRef.current) {
    startedRef.current = true;
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 25 + 10;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
      }
      setProgress(p);
    }, 180);
  }

  return (
    <div className="flex items-center justify-between rounded-[10px] border border-border px-3.5 py-2.5 text-[13px]">
      <span className="truncate">{file.name}</span>
      <div className="mx-3 h-[3px] flex-1 overflow-hidden rounded bg-border">
        <span className="block h-full bg-milano transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <span className="text-muted">{Math.round(progress)}%</span>
    </div>
  );
}

function Confetti({ trigger }) {
  const colors = ["#A90E02", "#FFFBD4", "#111111", "#E7DFC2"];
  if (!trigger) return null;
  const pieces = Array.from({ length: 26 }, (_, i) => {
    const angle = Math.random() * 360;
    const dist = 60 + Math.random() * 90;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist - 40;
    return { id: i, color: colors[i % colors.length], x, y, delay: Math.random() * 0.2 };
  });
  return (
    <div className="pointer-events-none absolute inset-0">
      {pieces.map((p) => (
        <i
          key={p.id}
          className="absolute left-1/2 top-1/2 h-2.5 w-1.5"
          style={{
            background: p.color,
            animation: `confettiPop .9s ease-out ${p.delay}s forwards`,
            "--x": `${p.x}px`,
            "--y": `${p.y}px`
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  const [introRef, introIn] = useReveal();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(EMPTY_DATA);
  const [shake, setShake] = useState(false);
  const [touched, setTouched] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const fileInputRef = useRef(null);

  function update(patch) {
    setData((d) => ({ ...d, ...patch }));
  }

  function addFiles(fileList) {
    const arr = Array.from(fileList).map((f) => ({ name: f.name, id: `${f.name}-${Math.random()}` }));
    setData((d) => ({ ...d, files: [...d.files, ...arr] }));
  }

  function flash() {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }

  function validate() {
    if (step === 1 && !data.service) return flash(), false;
    if (step === 2 && !data.businessType) return flash(), false;
    if (step === 3 && data.customBudget && !String(data.customAmount).trim()) return flash(), false;
    if (step === 4 && !data.timeline) return flash(), false;
    if (step === 7) {
      setTouched(true);
      const nameOk = data.name.trim().length > 1;
      const emailOk = /\S+@\S+\.\S+/.test(data.email);
      if (!nameOk || !emailOk) return false;
    }
    return true;
  }

  function budgetLabel() {
    if (data.customBudget) return `${formatINR(data.customAmount || 0)} (custom amount)`;
    return `${formatINR(data.budget)}${Number(data.budget) >= 1000000 ? "+" : ""}`;
  }

  async function submitProject() {
    setSendError("");
    const configured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!configured) {
      // EmailJS hasn't been set up yet (see src/emailConfig.js) — don't block
      // the demo experience, just skip the real send and log a reminder.
      console.warn("[DZMS] EmailJS isn't configured yet — see src/emailConfig.js for setup steps.");
      setStep(8);
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: NOTIFY_EMAILS.join(", "),
          service: data.service,
          business_type: data.businessType,
          budget: budgetLabel(),
          timeline: data.timeline,
          description: data.description || "—",
          file_names: data.files.map((f) => f.name).join(", ") || "None attached",
          from_name: data.name,
          from_company: data.company || "—",
          from_email: data.email,
          from_phone: data.phone || "—",
          from_country: data.country || "—"
        },
        EMAILJS_PUBLIC_KEY
      );
      setStep(8);
    } catch (err) {
      setSendError("Something went wrong sending your details — please try again, or email us directly.");
    } finally {
      setSending(false);
    }
  }

  async function goNext() {
    if (!validate()) return;
    if (step === 7) {
      await submitProject();
      return;
    }
    if (step < TOTAL_STEPS) setStep(step + 1);
  }
  function goBack() {
    if (step > 1) setStep(step - 1);
  }
  function restart() {
    setStep(1);
    setData(EMPTY_DATA);
    setTouched(false);
    setSendError("");
  }

  const pct = (step / TOTAL_STEPS) * 100;

  return (
    <section id="contact" className="bg-chiffon">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[60px] px-7 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow reveal-up in-view">Let&apos;s Build Together</p>
          <h2 ref={introRef} className={`section-title reveal-up ${introIn ? "in-view" : ""}`}>
            Tell us about your project.
          </h2>
          <p className="section-sub reveal-up in-view">
            Eight quick steps. No account, no spam — just a real reply from a real person within one business day.
          </p>

          <div className="mt-[34px] flex flex-col gap-[18px]">
            <div>
              <strong className="block text-base">ceo@dzms.co.in</strong>
              <span className="text-[13.5px] text-muted">General &amp; project enquiries</span>
            </div>
          </div>
        </div>

        <div className="sticky top-[110px] rounded-[28px] border border-border bg-white p-9">
          <div className="mb-[34px] flex items-center gap-4">
            <div className="h-1 flex-1 overflow-hidden rounded bg-border">
              <span className="block h-full bg-milano transition-all duration-400" style={{ width: `${pct}%` }} />
            </div>
            <span className="whitespace-nowrap text-[12.5px] text-muted">
              {step <= 7 ? `Step ${step} of 7` : "Complete"}
            </span>
          </div>

          <div className={shake ? "animate-shake" : ""}>
            {step === 1 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">What do you need help with?</h3>
                <OptionGrid options={SERVICE_OPTIONS} selected={data.service} onSelect={(v) => update({ service: v })} />
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">What kind of business is this for?</h3>
                <OptionGrid options={BUSINESS_OPTIONS} selected={data.businessType} onSelect={(v) => update({ businessType: v })} />
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">What&apos;s your rough budget?</h3>

                {!data.customBudget ? (
                  <>
                    <div className="mb-5 font-head text-[32px] font-bold text-milano">
                      {formatINR(data.budget)}
                      {Number(data.budget) >= 1000000 ? "+" : ""}
                    </div>
                    <input
                      type="range"
                      min="25000"
                      max="1000000"
                      step="25000"
                      value={data.budget}
                      onChange={(e) => update({ budget: e.target.value })}
                      className="w-full accent-milano"
                    />
                    <div className="mt-2 flex justify-between text-[12.5px] text-muted">
                      <span>₹25k</span>
                      <span>₹10L+</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => update({ customBudget: true })}
                      className="mt-5 text-[13.5px] font-semibold text-milano underline underline-offset-2"
                    >
                      Enter an exact amount instead
                    </button>
                  </>
                ) : (
                  <>
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Exact budget (₹)</label>
                    <div className="flex items-center gap-2 rounded-[10px] border border-border px-3.5 py-3 focus-within:border-milano">
                      <span className="font-head font-bold text-milano">₹</span>
                      <input
                        type="number"
                        min="0"
                        inputMode="numeric"
                        value={data.customAmount}
                        onChange={(e) => update({ customAmount: e.target.value })}
                        placeholder="e.g. 85000"
                        className="w-full text-[14.5px] outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => update({ customBudget: false, customAmount: "" })}
                      className="mt-4 text-[13.5px] font-semibold text-milano underline underline-offset-2"
                    >
                      Use the slider instead
                    </button>
                  </>
                )}
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">When do you want to get started?</h3>
                <OptionGrid options={TIMELINE_OPTIONS} selected={data.timeline} onSelect={(v) => update({ timeline: v })} />
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">Tell us a bit more about the project.</h3>
                <textarea
                  rows={6}
                  value={data.description}
                  onChange={(e) => update({ description: e.target.value })}
                  placeholder="What are you trying to build, and what does success look like?"
                  className="w-full rounded-[10px] border border-border p-4 text-[14.5px] outline-none focus:border-milano"
                />
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">Have any references, briefs, or assets?</h3>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer?.files) addFiles(e.dataTransfer.files);
                  }}
                  className={`flex cursor-pointer flex-col items-center gap-2.5 rounded-2xl border-[1.5px] border-dashed px-8 py-9 text-center text-muted transition-all ${
                    dragOver ? "border-milano bg-chiffon" : "border-border"
                  }`}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16V4M12 4L7 9M12 4L17 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <p>
                    Drag &amp; drop files here, or <span className="font-semibold text-milano underline">browse</span>
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    hidden
                    onChange={(e) => e.target.files && addFiles(e.target.files)}
                  />
                </div>
                <div className="mt-3.5 flex flex-col gap-2">
                  {data.files.map((f) => (
                    <FileRow key={f.id} file={f} />
                  ))}
                </div>
                <p className="mt-3 text-[12.5px] text-muted">Optional — you can skip this step.</p>
              </div>
            )}

            {step === 7 && (
              <div>
                <h3 className="mb-[22px] text-xl font-bold">Last step — how do we reach you?</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Full name</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => update({ name: e.target.value })}
                      className={`w-full rounded-[10px] border px-3.5 py-3 text-[14.5px] outline-none focus:border-milano ${
                        touched && data.name.trim().length <= 1 ? "border-milano" : "border-border"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Company</label>
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) => update({ company: e.target.value })}
                      className="w-full rounded-[10px] border border-border px-3.5 py-3 text-[14.5px] outline-none focus:border-milano"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Email</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => update({ email: e.target.value })}
                      className={`w-full rounded-[10px] border px-3.5 py-3 text-[14.5px] outline-none focus:border-milano ${
                        touched && !/\S+@\S+\.\S+/.test(data.email) ? "border-milano" : "border-border"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Phone</label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => update({ phone: e.target.value })}
                      className="w-full rounded-[10px] border border-border px-3.5 py-3 text-[14.5px] outline-none focus:border-milano"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-[12.5px] font-semibold text-muted">Country</label>
                    <input
                      type="text"
                      value={data.country}
                      onChange={(e) => update({ country: e.target.value })}
                      className="w-full rounded-[10px] border border-border px-3.5 py-3 text-[14.5px] outline-none focus:border-milano"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="py-5 text-center">
                <div className="relative mb-1.5 flex h-[120px] items-center justify-center">
                  <svg className="animate-[rocket_1.4s_cubic-bezier(0.22,1,0.36,1)_both] text-milano" width="54" height="54" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C15 5 16.5 9 15.5 14C14.8 14.4 13.9 14.6 12 14.6C10.1 14.6 9.2 14.4 8.5 14C7.5 9 9 5 12 2Z" fill="currentColor" />
                    <circle cx="12" cy="9" r="1.4" fill="#FFFBD4" />
                    <path d="M8.5 12L5.5 15.5L8 15L8.5 12Z" fill="currentColor" />
                    <path d="M15.5 12L18.5 15.5L16 15L15.5 12Z" fill="currentColor" />
                    <path d="M10.3 14.5L9.5 20L12 18L14.5 20L13.7 14.5" fill="currentColor" opacity="0.7" />
                  </svg>
                  <Confetti trigger={step === 8} />
                </div>
                <h3 className="mb-2.5 text-[23px] font-bold">You&apos;re all set.</h3>
                <p className="mx-auto mb-6 max-w-[360px] text-[14.5px] text-muted">
                  Your project details are in — our team will reply within one business day with next steps.
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-full border-[1.5px] border-milano px-6 py-3 text-[15px] font-semibold text-milano transition-all hover:bg-milano hover:text-white"
                >
                  Submit another project
                </button>
              </div>
            )}
          </div>

          {step === 7 && sendError && (
            <p className="mt-4 text-[13.5px] text-milano">{sendError}</p>
          )}

          {step < 8 && (
            <div className="mt-[34px] flex justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={sending}
                className={`rounded-full px-5 py-3 text-[15px] font-semibold ${step === 1 ? "invisible" : ""}`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={sending}
                className="rounded-full bg-milano px-[26px] py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(169,14,2,0.55)] transition-all hover:-translate-y-0.5 hover:bg-milano-hover disabled:opacity-60"
              >
                {sending ? "Sending…" : step === 7 ? "Submit Project" : "Continue"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
