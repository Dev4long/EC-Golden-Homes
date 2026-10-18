import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function FirstInvestment() {
  const { t } = useLanguage()

  const scrollToContact = (event) => {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="first-investment" className="first-investment">
      <div className="section-inner first-investment-inner">
        <Reveal>
          <p className="eyebrow eyebrow-light">{t.firstInvestment.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="first-investment-title">{t.firstInvestment.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="first-investment-desc">{t.firstInvestment.description}</p>
        </Reveal>
        <Reveal delay={200}>
          <a href="#contact" className="btn btn-accent" onClick={scrollToContact}>
            {t.firstInvestment.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
