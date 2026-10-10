import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const fillTimer = setTimeout(() => setFill(100), 80);
    const doneTimer = setTimeout(() => setDone(true), 700);
    // Safety net so it never blocks the page.
    const safety = setTimeout(() => setDone(true), 2500);
    return () => {
      clearTimeout(fillTimer);
      clearTimeout(doneTimer);
      clearTimeout(safety);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-[18px] bg-ink transition-all duration-500 ${
        done ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div className="font-head font-bold text-[20px] text-chiffon tracking-tight">DZ MARKETING SOLUTIONS</div>
      <div className="w-[180px] h-[2px] rounded-full bg-white/15 overflow-hidden">
        <span
          className="block h-full bg-milano transition-[width] duration-500 ease-out"
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  );
}
