const ICONS = {
  web: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12H20.5" />
      <path d="M12 3.5C14.5 6 15.8 9 15.8 12C15.8 15 14.5 18 12 20.5C9.5 18 8.2 15 8.2 12C8.2 9 9.5 6 12 3.5Z" />
    </>
  ),
  mobile: (
    <>
      <rect x="7.2" y="2.8" width="9.6" height="18.4" rx="2.2" />
      <path d="M10.3 18.4H13.7" />
    </>
  ),
  software: (
    <>
      <path d="M9.5 4.5L8.3 7.2M14.5 4.5L15.7 7.2M9.5 19.5L8.3 16.8M14.5 19.5L15.7 16.8M4.5 9.5L7.2 8.3M4.5 14.5L7.2 15.7M19.5 9.5L16.8 8.3M19.5 14.5L16.8 15.7" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  saas: (
    <>
      <path d="M6.5 17.5C4.2 17.5 2.5 15.7 2.5 13.5C2.5 11.5 4 9.9 5.9 9.6C6.5 6.9 8.9 5 11.7 5C14.8 5 17.3 7.3 17.6 10.3C19.6 10.6 21.2 12.4 21.2 14.5C21.2 16.7 19.4 18.5 17.2 18.5H6.5Z" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3L13.4 8.4L18.8 9.8L13.4 11.2L12 16.6L10.6 11.2L5.2 9.8L10.6 8.4L12 3Z" />
      <path d="M18.5 15L19.2 17.5L21.5 18.2L19.2 18.9L18.5 21.4L17.8 18.9L15.5 18.2L17.8 17.5L18.5 15Z" />
    </>
  ),
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3L20.5 20.5" strokeLinecap="round" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 15V9C4 8 4.7 7.5 5.5 7.5H8.5L15 4V20L8.5 16.5H5.5C4.7 16.5 4 16 4 15Z" />
      <path d="M18 9.5C19 10.3 19 13.2 18 14" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18C4.8 18 3 16.2 3 14C3 12 4.4 10.4 6.3 10.1C6.9 7.4 9.3 5.5 12.1 5.5C15.1 5.5 17.5 7.7 17.9 10.5C19.8 10.8 21.3 12.5 21.3 14.5C21.3 16.6 19.5 18 17.4 18H7Z" />
      <path d="M9 21L15 21" strokeLinecap="round" />
      <path d="M12 18V21" strokeLinecap="round" />
    </>
  ),
  design: (
    <>
      <path d="M12 3.5C6.8 3.5 3 7 3 11.5C3 14.5 5 15.8 6.8 15.8C8 15.8 8.6 15.1 8.6 14.2C8.6 13.4 8.2 13 8.2 12.2C8.2 10.9 9.3 9.9 10.7 9.9C13 9.9 14.3 11.5 14.3 13.6C14.3 16.9 12.2 18.9 9.4 20" />
      <circle cx="7.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="8.7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  hosting: (
    <>
      <rect x="3.5" y="4.5" width="17" height="6" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6" rx="1.6" />
      <circle cx="7" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  support: (
    <>
      <path d="M12 3.5C7.6 3.5 4 7.1 4 11.5V15" strokeLinecap="round" />
      <path d="M20 15V11.5C20 7.1 16.4 3.5 12 3.5" strokeLinecap="round" />
      <rect x="3" y="13.5" width="4" height="5.5" rx="1.5" />
      <rect x="17" y="13.5" width="4" height="5.5" rx="1.5" />
      <path d="M17 19V20C17 21.1 16.1 22 15 22H12.5" strokeLinecap="round" />
    </>
  ),
  speed: (
    <>
      <path d="M13 2.5L4.5 14H11L10.5 21.5L19.5 9.5H13L13 2.5Z" strokeLinejoin="round" />
    </>
  )
};

export default function ServiceIcon({ name, className = "" }) {
  const paths = ICONS[name] || ICONS.web;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
