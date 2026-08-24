import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const linkStyle = ({ isActive }) => ({
  fontWeight: 700,
  fontSize: '15px',
  color: isActive ? 'var(--ion)' : 'var(--slate)',
  padding: '8px 4px',
  borderBottom: isActive ? '2px solid var(--ion)' : '2px solid transparent',
})

export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(27,20,100,0.82)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <nav
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        <NavLink to="/" style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>
          🪐 Echoes of Cosmos
        </NavLink>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/trivia" style={linkStyle}>Trivia</NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
