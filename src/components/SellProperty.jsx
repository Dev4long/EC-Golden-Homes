import { useLanguage } from '../context/LanguageContext.jsx'
import PropertyCallout from './PropertyCallout.jsx'
import photo from '../assets/images/sell-property.jpg'

export default function SellProperty() {
  const { t } = useLanguage()

  return <PropertyCallout id="sell-property" content={t.sellProperty} image={photo} />
}
