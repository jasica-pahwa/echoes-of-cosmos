import { useState } from 'react'
import quizQuestions from '../data/Quiz.js'

const confettiColors = ['var(--meteor)', 'var(--nebula)', 'var(--ion)', 'var(--comet)', 'var(--grass)']

export default function QuizGame() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const question = quizQuestions[index]

  function choose(option) {
    if (selected) return
    setSelected(option)
    if (option === question.answer) {
      setScore((s) => s + 1)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 900)
    }
  }

  function next() {
    if (index + 1 < quizQuestions.length) {
      setIndex((i) => i + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  function restart() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="card" style={{ padding: 32, textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>RESULT</p>
        <h3 style={{ fontSize: 30 }}>
          {score} / {quizQuestions.length}
        </h3>
        <p style={{ color: 'var(--slate)', marginTop: 10 }}>
          {score === quizQuestions.length
            ? 'Perfect log entry — nothing missed.'
            : 'Solid round. Run it back and beat that score.'}
        </p>
        <button className="btn btn-primary" onClick={restart} style={{ marginTop: 22 }}>
          Restart quiz
        </button>
      </div>
    )
  }

  return (
    <div className="card" style={{ padding: 32, position: 'relative', overflow: 'visible' }}>
      {showConfetti && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.3
            const dist = 60 + Math.random() * 50
            const tx = `${Math.cos(angle) * dist}px`
            const ty = `${Math.sin(angle) * dist - 30}px`
            const tr = `${Math.floor(Math.random() * 360)}deg`
            return (
              <span
                key={i}
                className="confetti-piece"
                style={{
                  left: '50%',
                  top: '18%',
                  background: confettiColors[i % confettiColors.length],
                  '--tx': tx,
                  '--ty': ty,
                  '--tr': tr,
                }}
              />
            )
          })}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <span className="eyebrow">
          QUESTION {index + 1} / {quizQuestions.length}
        </span>
        <span className="mono" style={{ fontSize: 12, color: 'var(--slate)' }}>
          SCORE {score}
        </span>
      </div>

      <h3 style={{ fontSize: 21, marginBottom: 22, fontWeight: 500 }}>{question.question}</h3>

      <div style={{ display: 'grid', gap: 10 }}>
        {question.options.map((opt) => {
          let borderColor = 'var(--hairline)'
          let bg = 'transparent'
          if (selected) {
            if (opt === question.answer) {
              borderColor = 'var(--ion)'
              bg = 'rgba(79,216,196,0.08)'
            } else if (opt === selected) {
              borderColor = 'var(--comet)'
              bg = 'rgba(255,107,107,0.08)'
            }
          }
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              style={{
                textAlign: 'left',
                padding: '13px 16px',
                borderRadius: 10,
                border: `1px solid ${borderColor}`,
                background: bg,
                color: 'var(--star)',
                fontSize: 15,
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {selected && (
        <button className="btn btn-primary" onClick={next} style={{ marginTop: 24 }}>
          {index + 1 < quizQuestions.length ? 'Next question' : 'See result'}
        </button>
      )}
    </div>
  )
}