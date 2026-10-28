const upcoming = [
  {
    emoji: '🎖️',
    title: 'Mission badges',
    body: 'Earn a shiny badge every time you finish the trivia game or learn a new fact.',
  },
  {
    emoji: '📜',
    title: 'Space history',
    body: 'Travel back in time to the first rockets and moon landings, and meet the astronauts who got us there.',
  },
  {
    emoji: '🤖',
    title: 'Meet CosmoBot',
    body: 'Your adorable cosmic companion is getting ready! Soon, CosmoBot will help you discover planets, answer space questions, and explore the universe together. ✨',
  },
]

export default function ComingSoon() {
  return (
    <section style={{ padding: '20px 0 90px' }}>
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: 10 }}>
          🚧 COMING SOON
        </p>

        <h2 style={{ fontSize: 30, maxWidth: 520 }}>
          More space fun is on the way!
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
            marginTop: 32,
          }}
        >
          {upcoming.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{ border: '1px dashed var(--hairline)' }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>
                {item.emoji}
              </div>

              <h3 style={{ fontSize: 17, marginBottom: 6 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: 13.5, color: 'var(--slate)' }}>
                {item.body}
              </p>

              {item.title === 'Meet CosmoBot' && (
                <p
                  style={{
                    fontSize: 12,
                    marginTop: 12,
                    color: 'var(--slate)',
                  }}
                >
                  ✨ Beep boop! See you among the stars!
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
