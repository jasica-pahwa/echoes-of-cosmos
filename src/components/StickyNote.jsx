const colors = {
  yellow: 'var(--note-yellow)',
  pink: 'var(--note-pink)',
  blue: 'var(--note-blue)',
  green: 'var(--note-green)',
}

// A tiny rotated "post-it" with handwritten font - used to sprinkle
// friendly, kid-facing asides around the site ("Whoa, really?!", "Click
// me!"). Pure CSS positioning + a pop-in keyframe, no libraries.
export default function StickyNote({
  text,
  color = 'yellow',
  rotate = -6,
  delay = 2,
  style = {},
}) {
  return (
    <div
      className="sticky-note"
      style={{
        position: 'absolute',
        background: colors[color] || color,
        maxWidth: 150,
        '--note-rot': `${rotate}deg`,
        '--note-delay': `${delay}ms`,
        ...style,
      }}
    >
      {text}
    </div>
  )
}
