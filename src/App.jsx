import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Strategies from './components/Strategies.jsx'
import SellProperty from './components/SellProperty.jsx'
import SubmitProperty from './components/SubmitProperty.jsx'
import FirstInvestment from './components/FirstInvestment.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategies />
        <SellProperty />
        <SubmitProperty />
        <FirstInvestment />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
