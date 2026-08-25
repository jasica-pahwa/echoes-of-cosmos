// A simple, flat, friendly cartoon rocket. Colors come from CSS variables
// so it always matches the site's palette. No image files, no libraries.
export default function RocketIcon({ size = 64, tilt = -18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${tilt}deg)`, display: 'block' }}
    >
      {/* flame */}
      <path d="M50 78 C44 88, 44 94, 50 98 C56 94, 56 88, 50 78 Z" fill="var(--meteor)" />
      <path d="M50 78 C47 85, 47 90, 50 94 C53 90, 53 85, 50 78 Z" fill="var(--nebula)" />

      {/* fins */}
      <path d="M32 62 L18 82 L38 74 Z" fill="var(--ion)" />
      <path d="M68 62 L82 82 L62 74 Z" fill="var(--ion)" />

      {/* body */}
      <path
        d="M50 6 C66 22, 70 46, 64 70 L36 70 C30 46, 34 22, 50 6 Z"
        fill="var(--star)"
      />
      <path
        d="M50 6 C60 20, 64 40, 61 58 L50 58 Z"
        fill="rgba(255,111,174,0.18)"
      />

      {/* window */}
      <circle cx="50" cy="38" r="11" fill="var(--nebula)" />
      <circle cx="50" cy="38" r="6.5" fill="var(--ion)" />
      <circle cx="47.5" cy="35.5" r="2" fill="rgba(255,255,255,0.85)" />
    </svg>
  )
}