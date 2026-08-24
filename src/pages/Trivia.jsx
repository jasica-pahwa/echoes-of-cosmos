import QuizGame from '../games/QuizGame.jsx'

export default function Trivia() {
  return (
    <main>
      <section style={{ padding: '60px 0 30px' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>🎮 SPACE TRIVIA</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>How much do you know about space?</h1>
          <p style={{ marginTop: 10, color: 'var(--slate)', fontSize: 15.5 }}>
            Answer the questions and see how many you can get right!
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 0 90px' }}>
        <div className="wrap" style={{ maxWidth: 600, margin: '0 auto' }}>
          <QuizGame />
        </div>
      </section>
    </main>
  )
}
