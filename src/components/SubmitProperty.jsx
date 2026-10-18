import { useLanguage } from '../context/LanguageContext.jsx'
import PropertyCallout from './PropertyCallout.jsx'
import photo from '../assets/images/submit-property.jpg'

export default function SubmitProperty() {
  const { t } = useLanguage()

  return <PropertyCallout id="submit-property" content={t.submitProperty} image={photo} reverse />
}
