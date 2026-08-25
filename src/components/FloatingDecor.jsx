import RocketIcon from './RocketIcon.jsx'
import AstronautIcon from './AstronautIcon.jsx'

// A few decorative rockets/astronauts, gently bobbing via CSS (see
// .float-a/.float-b in index.css). Kept short on purpose - just enough
// for personality, not a performance drag.
const layout = [
  { Icon: RocketIcon, top: '8%', left: '4%', size: 56, tilt: -22, cls: 'float-a' },
  { Icon: AstronautIcon, top: '10%', left: '90%', size: 58, tilt: -8, cls: 'float-b' },
  { Icon: AstronautIcon, top: '62%', left: '2%', size: 44, tilt: 10, cls: 'float-b' },
]

export default function FloatingDecor() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {layout.map((item, i) => (
        <div
          key={i}
          className={item.cls}
          style={{ position: 'absolute', top: item.top, left: item.left, opacity: 0.9 }}
        >
          <item.Icon size={item.size} tilt={item.tilt} />
        </div>
      ))}
    </div>
  );}
