import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

const ICONS = {
  'fix-flip': HammerIcon,
  'buy-hold': KeyIcon,
}

export default function Strategies() {
  const { t } = useLanguage()

  const scrollToContact = (event) => {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="strategies" className="section strategies">
      <div className="section-inner">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow">{t.strategies.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">{t.strategies.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="section-subtitle">{t.strategies.subtitle}</p>
          </Reveal>
        </div>

        <div className="strategies-grid">
          {t.strategies.items.map((item, index) => {
            const Icon = ICONS[item.id]
            return (
              <Reveal delay={index * 120} key={item.id} className="strategy-card-wrapper">
                <article id={item.id} className="strategy-card">
                  <div className="strategy-card-icon">
                    <Icon />
                  </div>
                  <h3 className="strategy-card-title">{item.title}</h3>
                  <p className="strategy-card-tagline">{item.tagline}</p>
                  <p className="strategy-card-desc">{item.description}</p>
                  <ul className="strategy-card-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="strategy-card-cta" onClick={scrollToContact}>
                    {t.nav.cta}
                    <span aria-hidden="true"> →</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HammerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
      <path d="M15.8 7.8 5.5 18a2 2 0 0 0 0 2.8 2 2 0 0 0 2.8 0L18.2 10.5" />
      <path d="M3.5 20.5 5.5 18" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="8" cy="15.5" r="3.5" />
      <path d="M10.3 13 18.5 4.8" />
      <path d="M15.5 7.8 18 10.3" />
      <path d="M18.5 4.8 21 7.3" />
    </svg>
  )
}
