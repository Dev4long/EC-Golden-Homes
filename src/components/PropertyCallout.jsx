import Reveal from './Reveal.jsx'

export default function PropertyCallout({ id, content, image, reverse = false }) {
  const scrollToContact = (event) => {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const mediaDirection = reverse ? 'right' : 'left'
  const copyDirection = reverse ? 'left' : 'right'

  return (
    <section id={id} className="section property-callout">
      <div className={`section-inner property-grid ${reverse ? 'property-grid-reverse' : ''}`}>
        <Reveal direction={mediaDirection} className="property-media">
          <div className="property-media-frame">
            <img src={image} alt={content.imageAlt} className="property-image" />
          </div>
        </Reveal>

        <div className="property-copy">
          <Reveal direction={copyDirection}>
            <p className="eyebrow">{content.eyebrow}</p>
          </Reveal>
          <Reveal direction={copyDirection} delay={80}>
            <h2 className="section-title">{content.title}</h2>
          </Reveal>
          <Reveal direction={copyDirection} delay={140}>
            <p className="section-subtitle">{content.description}</p>
          </Reveal>
          <Reveal direction={copyDirection} delay={200}>
            <ul className="property-list">
              {content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction={copyDirection} delay={260}>
            <a href="#contact" className="btn btn-accent" onClick={scrollToContact}>
              {content.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
