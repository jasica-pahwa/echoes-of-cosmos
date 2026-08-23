// A simple, flat, friendly floating astronaut. Colors come from CSS
// variables so it always matches the site's palette.
export default function AstronautIcon({ size = 64, tilt = 8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${tilt}deg)`, display: 'block' }}
    >
      {/* backpack */}
      <rect x="38" y="46" width="24" height="26" rx="6" fill="var(--nebula)" />

      {/* body */}
      <path
        d="M32 50 C32 36, 42 30, 50 30 C58 30, 68 36, 68 50 L66 76 C66 84, 58 88, 50 88 C42 88, 34 84, 34 76 Z"
        fill="var(--star)"
      />

      {/* chest panel */}
      <rect x="42" y="56" width="16" height="10" rx="3" fill="var(--ion)" />
      <circle cx="46" cy="61" r="1.6" fill="var(--star)" />
      <circle cx="54" cy="61" r="1.6" fill="var(--star)" />

      {/* arms */}
      <path d="M32 52 C22 54, 16 62, 18 72 C20 70, 26 66, 33 64 Z" fill="var(--star)" />
      <path d="M68 52 C78 54, 84 62, 82 72 C80 70, 74 66, 67 64 Z" fill="var(--star)" />

      {/* legs */}
      <path d="M40 84 L37 98 L46 98 L47 86 Z" fill="var(--star)" />
      <path d="M60 84 L63 98 L54 98 L53 86 Z" fill="var(--star)" />

      {/* helmet */}
      <circle cx="50" cy="26" r="20" fill="var(--star)" />
      <circle cx="50" cy="26" r="15.5" fill="var(--sky-b, var(--nebula))" />
      <circle cx="45" cy="21" r="4.5" fill="rgba(255,255,255,0.55)" />
    </svg>
  )
}