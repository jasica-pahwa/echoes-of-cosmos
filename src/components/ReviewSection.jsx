import './CommunitySections.css'

const reviews = [
  { name: 'Aanya', role: 'Curious explorer', avatar: '👩🏽‍🚀', quote: 'The planet pages make space easy to understand. I came for one fact and ended up exploring for an hour!' },
  { name: 'Leo', role: 'Trivia fan', avatar: '🧑🏻‍🚀', quote: 'The quiz is a fun way to learn. I love challenging my friends to beat my score.' },
  { name: 'Mira', role: 'Future astronaut', avatar: '👩🏾‍🚀', quote: 'It feels like a little space clubhouse. The bright design and fun facts make me want to keep coming back.' },
]

export default function ReviewSection() {
  return (
    <section className="community-section review-section" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="community-heading">
          <p className="eyebrow">💫 NOTES FROM THE CREW</p>
          <h2 id="reviews-title">Explorer reviews</h2>
          <p>A few kind words from our space-loving community.</p>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card card" key={review.name}>
              <div className="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="review-author">
                <span className="review-avatar" aria-hidden="true">{review.avatar}</span>
                <span><strong>{review.name}</strong><small>{review.role}</small></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
