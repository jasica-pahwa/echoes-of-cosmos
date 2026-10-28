import { useState } from 'react'
import './SpaceMissionGenerator.css'

const destinations = ['The Moon', 'Mars', 'Europa', 'Titan', 'Venus', 'Saturn']
const missionTypes = [
  {
    name: 'Deep-space research', icon: '🔬',
    objective: ['Collect ice samples and scan them for signs of ancient water.', 'Study the planet’s atmosphere and send the readings back to Earth.', 'Photograph a newly discovered crater from three different angles.'],
    challenge: ['A solar storm may interrupt communications.', 'Your instruments have limited power—choose each scan carefully.', 'A field of micrometeoroids is crossing your flight path.'],
  },
  {
    name: 'Rescue mission', icon: '🛟',
    objective: ['Find a stranded science crew and guide them to the return capsule.', 'Deliver an emergency oxygen kit to the outpost before nightfall.', 'Locate the missing rover beacon and bring its crew safely home.'],
    challenge: ['The landing zone is covered in thick dust.', 'You have one hour of daylight left at the outpost.', 'The distress signal is fading between bursts of static.'],
  },
  {
    name: 'First contact', icon: '📡',
    objective: ['Decode a repeating signal and discover where it is coming from.', 'Send a peaceful greeting and listen for a reply.', 'Map the signal source without disturbing the surrounding terrain.'],
    challenge: ['The signal changes frequency every few minutes.', 'Your antenna can point in only one direction at a time.', 'A nearby storm is creating interference.'],
  },
  {
    name: 'Rover expedition', icon: '🚙',
    objective: ['Chart a safe route through a valley no rover has crossed before.', 'Reach the glowing ridge and photograph the horizon.', 'Deliver a tiny science lab to the far side of the crater.'],
    challenge: ['A steep slope could trap the rover wheels.', 'The map is missing the final two kilometres.', 'Your rover battery is running low.'],
  },
  {
    name: 'Supply drop', icon: '📦',
    objective: ['Deliver fresh food and spare parts to the research station.', 'Place a new telescope module on the station’s outer platform.', 'Bring a package of science tools to the lunar base.'],
    challenge: ['Crosswinds are pushing your cargo craft off course.', 'The docking window lasts only a few minutes.', 'One of the package’s landing sensors is offline.'],
  },
]

function pickDifferent(items, previous) {
  const choices = items.filter((item) => item !== previous)
  return choices[Math.floor(Math.random() * choices.length)] || items[0]
}

function createMission(previous) {
  const type = pickDifferent(missionTypes, previous?.name)
  return {
    id: Math.floor(1000 + Math.random() * 9000),
    type,
    destination: pickDifferent(destinations, previous?.destination),
    objective: pickDifferent(type.objective, previous?.objective),
    challenge: pickDifferent(type.challenge, previous?.challenge),
    difficulty: ['Cadet', 'Pilot', 'Commander'][Math.floor(Math.random() * 3)],
    reward: 100 + Math.floor(Math.random() * 9) * 50,
  }
}

export default function SpaceMissionGenerator() {
  const [mission, setMission] = useState(null)

  function launchMission() {
    setMission((current) => createMission(current))
  }

  return (
    <section className="mission-generator-section" id="mission-generator" aria-labelledby="mission-generator-title">
      <div className="wrap">
        <div className="mission-generator-card">
          <div className="mission-generator-orbit" aria-hidden="true"><span>🚀</span></div>
          <div className="mission-generator-content">
            <p className="eyebrow">🪐 YOUR NEXT ADVENTURE</p>
            <h2 id="mission-generator-title">Space mission generator</h2>
            <p className="mission-generator-intro">Need a little cosmic inspiration? Generate a fresh mission brief and see where your crew is headed.</p>

            {mission ? (
              <article className="mission-brief" aria-live="polite" aria-atomic="true">
                <div className="mission-brief-topline">
                  <span className="mission-brief-type">{mission.type.icon} {mission.type.name}</span>
                  <span className="mission-brief-code">MISSION #{mission.id}</span>
                </div>
                <h3>Destination: {mission.destination}</h3>
                <div className="mission-brief-details">
                  <div><span className="mission-detail-label">OBJECTIVE</span><p>{mission.objective}</p></div>
                  <div><span className="mission-detail-label">MISSION CHALLENGE</span><p>{mission.challenge}</p></div>
                </div>
                <div className="mission-brief-footer"><span>⚡ {mission.difficulty} level</span><span>🏅 {mission.reward} star points</span></div>
              </article>
            ) : (
              <div className="mission-ready" role="status"><span aria-hidden="true">✨</span><p>Your mission briefing is waiting.</p></div>
            )}

            <button className="btn btn-primary mission-generate-button" type="button" onClick={launchMission}>
              {mission ? 'Generate another mission' : 'Generate my mission'} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
