
import { useState } from 'react'
import './BuildRocket.css'

const parts = [
  { id: 'nose-pointed', type: 'nose', name: 'Pointed Nose', symbol: '🔺' },
  { id: 'nose-round', type: 'nose', name: 'Rounded Nose', symbol: '🔻' },
  { id: 'body-slim', type: 'body', name: 'Slim Body', symbol: '▯' },
  { id: 'body-wide', type: 'body', name: 'Wide Body', symbol: '▮' },
  { id: 'fins-small', type: 'fins', name: 'Small Fins', symbol: '◀' },
  { id: 'fins-large', type: 'fins', name: 'Large Fins', symbol: '◀◀' },
  { id: 'engine-single', type: 'engine', name: 'Single Engine', symbol: '🔥' },
  { id: 'engine-double', type: 'engine', name: 'Double Engine', symbol: '🔥🔥' },
]

const slots = [
  { type: 'nose', label: 'Nose Cone' },
  { type: 'body', label: 'Rocket Body' },
  { type: 'fins', label: 'Fins' },
  { type: 'engine', label: 'Engine' },
]

export default function BuildRocket() {
  const [rocket, setRocket] = useState({})
  const [message, setMessage] = useState('Drag each part into its matching slot!')
  const [launching, setLaunching] = useState(false)

  function handleDragStart(event, part) {
    event.dataTransfer.setData('partId', part.id)
  }

  function handleDragOver(event) {
    event.preventDefault()
  }

  function handleDrop(event, slotType) {
    event.preventDefault()

    const partId = event.dataTransfer.getData('partId')
    const part = parts.find((item) => item.id === partId)

    if (!part) return

    if (part.type !== slotType) {
      setMessage('That part does not fit here. Try another slot!')
      return
    }

    setRocket((previousRocket) => ({
      ...previousRocket,
      [slotType]: part,
    }))

    setLaunching(false)
    setMessage(`${part.name} attached successfully!`)
  }

  function resetRocket() {
    setRocket({})
    setLaunching(false)
    setMessage('Your rocket is ready to be built again!')
  }

  const complete = slots.every((slot) => rocket[slot.type])

  function launchRocket() {
    if (!complete) return

    setLaunching(true)
    setMessage('Mission launched! To infinity and beyond!')
  }

  return (
    <main className="build-rocket-page">
      <section className="rocket-heading">
        <p className="rocket-eyebrow">COSMIC ENGINEERING LAB</p>
        <h1>Build Your Rocket</h1>
        <p>
          Choose your components, assemble your spacecraft,
          and launch your own cosmic mission.
        </p>
      </section>

      <section className="rocket-workshop">
        <div className="parts-panel">
          <h2>Rocket Parts</h2>
          <p className="panel-hint">Drag a piece to its matching slot.</p>

          <div className="parts-grid">
            {parts.map((part) => (
              <div
                key={part.id}
                className="part-card"
                draggable
                onDragStart={(event) => handleDragStart(event, part)}
              >
                <span className="part-symbol">{part.symbol}</span>
                <span>{part.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="assembly-panel">
          <h2>Assembly Station</h2>
          <p className="panel-hint">
            {slots.filter((slot) => rocket[slot.type]).length} of 4 parts installed
          </p>
<div className="rocket-preview">
  <div className={`rocket-art ${launching ? 'rocket-launched' : ''}`}>
    {rocket.nose && (
      <div
        className={`rocket-nose ${rocket.nose.id === 'nose-round' ? 'nose-rounded' : 'nose-pointed'}`}
      />
    )}

    {rocket.fins && (
      <div className={`rocket-fins ${rocket.fins.id === 'fins-large' ? 'fins-large' : 'fins-small'}`}>
        <span className="rocket-fin left-fin" />
        <span className="rocket-fin right-fin" />
      </div>
    )}

    {rocket.body && (
      <div className={`rocket-body ${rocket.body.id === 'body-wide' ? 'body-wide' : 'body-slim'}`}>
        <span className="rocket-window" />
        <span className="rocket-window second-window" />
      </div>
    )}

    {rocket.engine && (
      <div className="rocket-engine">
        <span />
        {rocket.engine.id === 'engine-double' && <span />}
      </div>
    )}

    {launching && <div className="rocket-flames">🔥</div>}
  </div>
</div>


          <div className="assembly-slots">
            {slots.map((slot) => (
              <div
                key={slot.type}
                className={`assembly-slot ${rocket[slot.type] ? 'slot-filled' : ''}`}
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, slot.type)}
              >
                <span className="slot-label">{slot.label}</span>

                {rocket[slot.type] ? (
                  <div className="installed-part">
                    <span>{rocket[slot.type].symbol}</span>
                    <span>{rocket[slot.type].name}</span>
                    <button
                      className="remove-part"
                      onClick={() => {
                        setRocket((previousRocket) => {
                          const updatedRocket = { ...previousRocket }
                          delete updatedRocket[slot.type]
                          return updatedRocket
                        })
                        setLaunching(false)
                        setMessage('Part removed. Choose another component!')
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <span className="empty-slot">Drop part here</span>
                )}
              </div>
            ))}
          </div>

          <div className="rocket-progress">
            <div
              className="rocket-progress-fill"
              style={{
                width: `${(slots.filter((slot) => rocket[slot.type]).length / 4) * 100}%`,
              }}
            />
          </div>

          <p className="rocket-message" aria-live="polite">{message}</p>

          <div className="rocket-actions">
            <button
              className="launch-button"
              onClick={launchRocket}
              disabled={!complete || launching}
            >
              {launching ? '🚀 Launched!' : '🚀 Launch Mission'}
            </button>

            <button className="reset-button" onClick={resetRocket}>
              Reset
            </button>
          </div>
        </div>
      </section>

      {complete && (
        <p className="mission-ready">
          ✨ Rocket assembled! Your mission is ready.
        </p>
      )}
    </main>
  )
}

