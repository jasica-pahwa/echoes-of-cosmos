import {Link} from 'react-router-dom'
import FloatingDecor from '../components/FloatingDecor.jsx'
import StickyNote from '../components/StickyNote.jsx'
import ComingSoon from '../components/ComingSoon.jsx'
import facts from '../data/facts.js'

const headline= 'Blast off into wonders of space!'
const previewFacts=facts.slice(0,3)
export default function Home() {
  return (
    <main>
        <section style={{ position: 'relative', padding: '90px 0 60px' }}>
        <FloatingDecor />
        <StickyNote
          text="hi space friend! 🚀"
          color="pink"
          rotate={-7}
          style={{ top: '4%', left: '4%' }}
        />
        <StickyNote
          text="whoosh!"
          color="blue"
          rotate={9}
          style={{ top: '18%', right: '4%' }}
        />
        <div className="wrap" style={{ maxWidth: 760, textAlign: 'center', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>🚀 A SPACE ADVENTURE FOR EXPLORERS</p>

          <h1 style={{ fontSize: 'clamp(34px, 6vw, 58px)', lineHeight: 1.15 }}>
            {headline.split(' ').map((word, i) => (
              <span
                key={i}
                className="word-in"
                style={{ animationDelay: `${i * 60}ms`, marginRight: '0.28em' }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p style={{ marginTop: 18, fontSize: 18, color: 'var(--slate)', maxWidth: 520, margin: '18px auto 0' }}>
            Meet friendly astronauts, discover super cool space facts, and play a
            fun space quiz — all in one awesome place!
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 30, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/trivia" className="btn btn-primary">🎮 Play Space Trivia</Link>
            <a href="#facts" className="btn">✨ See Fun Facts</a>
          </div>
        </div>
      </section>
      <section id="facts" style={{ padding: '50px 0' }}>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: 10 }}>🌟 FUN SPACE FACTS</p>
          <h2 style={{ fontSize: 28, maxWidth: 480 }}>Did you know...?</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              marginTop: 32,
            }}
          >
            {previewFacts.map((f) => (
              <div key={f.id} className="card">
                <p style={{ fontSize: 15.5 }}>{f.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/trivia" className="btn btn-primary">Ready? Play the trivia game! 🚀</Link>
          </div>
        </div>
      </section>

      <ComingSoon />
    </main>
  )
}

