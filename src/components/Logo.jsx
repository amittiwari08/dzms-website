/**
 * DZ Marketing Solutions logo and wordmark.
 * Uses the supplied current brand icon while preserving the existing
 * responsive wordmark styles and light/dark variants.
 */
export default function Logo({ variant = "dark", className = "" }) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/dz-logo.png"
        alt=""
        width="34"
        height="34"
        className="h-[34px] w-[34px] shrink-0 rounded-lg object-contain"
        decoding="async"
      />
      <span className={`font-head text-[12px] sm:text-[14px] font-bold tracking-tight leading-none ${wordmarkColor}`}>
        DZ MARKETING SOLUTIONS
      </span>
    </span>
  );
}
