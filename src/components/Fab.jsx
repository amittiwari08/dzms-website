export default function Fab() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-[900] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-milano text-white shadow-[0_14px_30px_-10px_rgba(169,14,2,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-milano-hover"
      aria-label="Start your project"
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M2 8L14 2L9 14L7 9L2 8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
