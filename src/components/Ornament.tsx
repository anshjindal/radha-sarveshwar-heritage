export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden>
      <span className="gold-rule flex-1" />
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 6c1.8 6.2 4.8 10.4 9 12.6-4.2 1.6-7.2 5.4-9 11.4-1.8-6-4.8-9.8-9-11.4C19.2 16.4 22.2 12.2 24 6Z"
          fill="#C9A84C"
        />
        <path
          d="M24 18c3.2 2.8 7.4 4.2 12 4.2-4.6 1.4-8.4 4.6-11.2 9.2-.4-5-2.4-9-6.8-12 2.2-.6 4.2-1 6-1.4Z"
          fill="#E8D48B"
          opacity=".85"
        />
        <path
          d="M24 18c-3.2 2.8-7.4 4.2-12 4.2 4.6 1.4 8.4 4.6 11.2 9.2.4-5 2.4-9 6.8-12-2.2-.6-4.2-1-6-1.4Z"
          fill="#C45C26"
          opacity=".9"
        />
        <circle cx="24" cy="24" r="2.4" fill="#4A0E18" />
      </svg>
      <span className="gold-rule flex-1" />
    </div>
  );
}

export function OmMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-deva text-gold ${className}`} aria-hidden>
      ॐ
    </span>
  );
}
