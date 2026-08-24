import { useEffect, useState } from 'react'

// Flips a data-theme attribute on <html>; index.css swaps the color
// tokens underneath it. One useState + one useEffect, nothing else.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="mono"
      style={{
        padding: '8px 14px',
        borderRadius: 999,
        border: '1px solid var(--hairline)',
        background: 'transparent',
        color: 'var(--slate)',
        fontSize: 13,
      }}
    >
      {dark ? '🌙 Dark' : '☀️ Bright'}
    </button>
  )
}
