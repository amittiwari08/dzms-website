import { useRef } from "react";

/**
 * Wraps a button/link and adds a subtle magnetic-follow effect on mouse move.
 * Usage: <Magnetic><a className="btn ...">Label</a></Magnetic>
 */
export default function Magnetic({ children, className = "" }) {
  const ref = useRef(null);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.35}px)`;
  }
  function onMouseLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-flex will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
