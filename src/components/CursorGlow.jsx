import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    function onMove(e) {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[2] hidden h-[420px] w-[420px] rounded-full md:block"
      style={{ background: "radial-gradient(circle, rgba(169,14,2,0.10), transparent 70%)" }}
    />
  );
}
