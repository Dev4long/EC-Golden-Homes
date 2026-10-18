import { useLanguage } from '../context/LanguageContext.jsx'
import { siteConfig } from '../data/content.js'
import logoFull from '../assets/images/logo-full.png'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <img src={logoFull} alt="EC Golden Homes" className="footer-logo" />
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-links">
          <h4>{t.footer.quickLinks}</h4>
          <a href="#home" onClick={scrollTo('home')}>{t.nav.home}</a>
          <a href="#about" onClick={scrollTo('about')}>{t.nav.about}</a>
          <a href="#strategies" onClick={scrollTo('strategies')}>{t.nav.strategies}</a>
          <a href="#contact" onClick={scrollTo('contact')}>{t.nav.contact}</a>
        </div>

        <div className="footer-links">
          <h4>{t.footer.ourStrategies}</h4>
          <a href="#fix-flip" onClick={scrollTo('fix-flip')}>{t.nav.fixFlip}</a>
          <a href="#buy-hold" onClick={scrollTo('buy-hold')}>{t.nav.buyHold}</a>
          <a href="#first-investment" onClick={scrollTo('first-investment')}>{t.nav.firstInvestment}</a>
        </div>

        <div className="footer-links">
          <h4>{t.footer.contactUs}</h4>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} EC Golden Homes. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
