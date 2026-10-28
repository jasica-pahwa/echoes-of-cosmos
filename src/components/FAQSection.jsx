import './CommunitySections.css'

const questions = [
  ['What can I explore on Echoes of Cosmos?', 'Explore planet guides, discover space facts, and test what you know with space trivia.'],
  ['Is this site suitable for beginners?', 'Absolutely! It is made for curious explorers, whether you are just getting started or already love astronomy.'],
  ['Can I use the site on my phone or tablet?', 'Yes. The pages adapt to smaller screens, so you can explore from a phone, tablet, or computer.'],
  ['Are the games free to play?', 'Yes. Space trivia and the learning activities are free to explore.'],
]

export default function FAQSection() {
  return (
    <section className="community-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="community-heading">
          <p className="eyebrow">🛰️ QUICK ANSWERS</p>
          <h2 id="faq-title">Frequently asked questions</h2>
          <p>Wondering how your space adventure works? Start here.</p>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary><span>{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
