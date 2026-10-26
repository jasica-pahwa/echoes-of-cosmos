const upcoming = [
  {
    emoji: '🛠️',
    title: 'Build-a-Rocket',
    body: 'Pick your own nose cone, fins, and boosters, then watch your very own rocket launch.',
  },
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
    emoji: '📰',
    title: 'Space news channel',
    body: 'Fun, kid-friendly updates about what is really happening in space right now.',
  },
]

export default function ComingSoon() {
  return (
    <section style={{ padding: '20px 0 90px' }}>
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: 10 }}>🚧 COMING SOON</p>
        <h2 style={{ fontSize: 30, maxWidth: 520 }}>More space fun is on the way!</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
            marginTop: 32,
          }}
        >
          {upcoming.map((item) => (
            <div key={item.title} className="card" style={{ border: '1px dashed var(--hairline)' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.emoji}</div>
              <h3 style={{ fontSize: 17, marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--slate)' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}