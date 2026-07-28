/**
 * DZMS logo: a bold "D" monogram badge + wordmark.
 * `variant="light"` renders the wordmark in white for dark backgrounds
 * (footer, the dark Process section) — the badge itself stays Milano Red
 * either way, since it's the brand's fixed mark.
 */
export default function Logo({ variant = "dark", className = "" }) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill="#A90E02" />
        <path
          d="M10 8.5H17.4C21.5 8.5 24.5 11.6 24.5 17C24.5 22.4 21.5 25.5 17.4 25.5H10V8.5Z"
          stroke="#FFFBD4"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M10 17H17.8" stroke="#FFFBD4" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={`font-head text-[19px] font-bold tracking-tight ${wordmarkColor}`}>DZMS</span>
    </span>
  );
}
