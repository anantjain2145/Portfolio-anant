interface MonogramLogoProps {
  className?: string;
}

export function MonogramLogo({ className = 'h-8 w-8' }: MonogramLogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent)' }}
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <path
        d="M11 27L16.2 13H18.4L23.5 27H21.1L19.9 23.4H14.7L13.5 27H11ZM15.4 21.4H19.2L17.3 15.8L15.4 21.4Z"
        style={{ fill: 'var(--text-primary)' }}
      />
      <path
        d="M27.8 13V22.4C27.8 25.4 26.1 27.2 23.3 27.2C22.4 27.2 21.6 27 21 26.7L21.6 24.8C22 25 22.5 25.1 23 25.1C24.5 25.1 25.4 24.2 25.4 22.3V13H27.8Z"
        style={{ fill: 'var(--accent)' }}
      />
    </svg>
  );
}
