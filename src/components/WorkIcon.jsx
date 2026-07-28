const ICONS = {
  courier: (
    <>
      <path d="M3 16V7.5C3 6.7 3.7 6 4.5 6H14V16" />
      <path d="M14 9.5H17.5L21 12.8V16H14" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
      <path d="M9.5 18H15.5" />
    </>
  ),
  travel: (
    <>
      <path d="M3 13L21 5L14 21L11.5 14.5L3 13Z" strokeLinejoin="round" />
      <path d="M11.5 14.5L21 5" />
    </>
  ),
  agritech: (
    <>
      <path d="M12 21C12 21 5 17.5 5 10.5C5 6.9 8.1 4 12 4C15.9 4 19 6.9 19 10.5C19 17.5 12 21 12 21Z" />
      <path d="M12 21V11" />
      <path d="M12 13.5C9.5 13.5 8 11.8 8 9.5C10.5 9.5 12 11 12 13.5Z" />
      <path d="M12 11.5C14.2 11.5 15.5 10 15.5 8C13 8 12 9.3 12 11.5Z" />
    </>
  ),
  health: (
    <>
      <path d="M12 4C13.5 4 15 5.2 15 7C15 9.5 12 12 12 12C12 12 9 9.5 9 7C9 5.2 10.5 4 12 4Z" />
      <path d="M4 15H8L9.5 12L11.5 17L13 13.5L14 15H20" />
    </>
  ),
  education: (
    <>
      <path d="M12 5L21 9L12 13L3 9L12 5Z" strokeLinejoin="round" />
      <path d="M7 11V16C7 17.5 9.2 19 12 19C14.8 19 17 17.5 17 16V11" />
    </>
  ),
  realestate: (
    <>
      <path d="M4 11L12 4L20 11" strokeLinecap="round" />
      <path d="M6 10V19H18V10" />
      <path d="M10 19V14H14V19" />
    </>
  ),
  finance: (
    <>
      <rect x="3.5" y="7" width="17" height="12" rx="1.6" />
      <path d="M3.5 10.5H20.5" />
      <path d="M7 14.5H10" />
    </>
  ),
  retail: (
    <>
      <path d="M5 8L6.5 4.5H17.5L19 8" />
      <path d="M4.5 8H19.5L18.7 19H5.3L4.5 8Z" />
      <path d="M9 11C9 12.7 10.3 14 12 14C13.7 14 15 12.7 15 11" />
    </>
  ),
  government: (
    <>
      <path d="M4 10L12 4L20 10" />
      <path d="M5 10V19M9.5 10V19M14.5 10V19M19 10V19" />
      <path d="M3.5 19H20.5" />
    </>
  ),
  corporate: (
    <>
      <rect x="6" y="3.5" width="12" height="17" rx="1.2" />
      <path d="M9.5 7.5H14.5M9.5 11H14.5M9.5 14.5H12.5" />
    </>
  )
};

export default function WorkIcon({ name, className = "" }) {
  const paths = ICONS[name] || ICONS.corporate;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
