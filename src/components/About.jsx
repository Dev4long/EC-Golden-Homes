import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import teamPhoto from '../assets/images/team-construction.jpg'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="section-inner about-grid">
        <Reveal direction="left" className="about-media">
          <div className="about-image-frame">
            <img src={teamPhoto} alt={t.about.imageAlt} className="about-image" />
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">{t.about.title}</h2>
          </Reveal>
          {t.about.paragraphs.map((paragraph, index) => (
            <Reveal delay={140 + index * 60} key={index}>
              <p className="about-paragraph">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
