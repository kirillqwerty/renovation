export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Дом с ростом (стрелка вверх) */}
      <path d="M50 10L20 35V75H35V50H65V75H80V35L50 10Z" fill="#D4A574" />
      <path
        d="M50 10L80 35V75H65V50H35V75H20V35L50 10Z"
        fill="url(#gradient1)"
        fillOpacity="0.3"
      />
      {/* Ключ как символ риэлторских услуг */}
      <circle cx="70" cy="25" r="8" fill="#D4A574" />
      <circle cx="70" cy="25" r="5" fill="white" />
      <rect x="62" y="24" width="8" height="2" fill="#D4A574" />
      <rect x="58" y="22" width="2" height="2" fill="#D4A574" />
      <rect x="58" y="26" width="2" height="2" fill="#D4A574" />

      {/* Стрелка роста */}
      <path
        d="M85 85L95 75M95 75L95 85M95 75L85 75"
        stroke="#D4A574"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id="gradient1"
          x1="50"
          y1="10"
          x2="50"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#C39563" />
        </linearGradient>
      </defs>
    </svg>
  );
}
