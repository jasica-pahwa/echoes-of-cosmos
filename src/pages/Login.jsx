import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const { login, loading } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !password) {
      setError('Please fill in both fields.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setError('')

    login(email.trim(), password)
      .then((result) => {
        if (result.success) {
          navigate('/')
        }
      })
      .catch(() => {
        setError('Something went wrong. Please try again.')
      })
  }

  return (
    <main className="login-page">
      <div className="login-stars" aria-hidden="true" />

      <Link to="/" className="login-brand">
        <span className="brand-orb">✦</span>
        <span>
          ECHOES <strong>OF THE COSMOS</strong>
        </span>
      </Link>

      <section className="login-card">
        <div className="login-eyebrow">
          <span className="status-dot" />
          COSMIC ACCESS
        </div>

        <h1>
          Welcome back,
          <span> explorer.</span>
        </h1>

        <p className="login-subtitle">
          The universe is waiting. Continue your journey
          through the wonders of space.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError('')
              }}
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>

            <div className="password-wrapper">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError('')
                }}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? 'Entering the cosmos...' : 'Enter the Cosmos ↗'}
          </button>
        </form>

        <div className="login-divider">
          <span />
          <p>YOUR NEXT DISCOVERY AWAITS</p>
          <span />
        </div>

      </section>

      <p className="login-footer">
        MADE FOR THE CURIOUS · EXPLORE BEYOND THE STARS
      </p>
    </main>
  )
}

export default Login
