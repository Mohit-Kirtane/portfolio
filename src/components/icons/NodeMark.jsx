export function NodeMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#0d0f12" />
      <path
        d="M9 22 L16 10 L23 22"
        stroke="#4a7385"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="9" y1="22" x2="23" y2="22" stroke="#4a7385" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="10" r="2.6" fill="#d97a3f" />
      <circle cx="9" cy="22" r="2.2" fill="#8b8f96" />
      <circle cx="23" cy="22" r="2.2" fill="#8b8f96" />
    </svg>
  );
}
