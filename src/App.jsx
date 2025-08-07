import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/hero_section'
import FeaturesSection from './Components/featuresSection'
import ConnectionSection from './Components/connectionSection'
import DonationSection from './Components/donationSection'
import FooterSection from './Components/footerSection'
import InstallSection from './Components/installSection'
import Testimonialssection from './Components/testimonialssection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#FF5349] text-white font-avant-gard">
    <HeroSection />
    <FeaturesSection />
    <ConnectionSection/>
    <InstallSection/>
    <DonationSection/>
    <Testimonialssection/>
    <FooterSection/>
    </div>
    </>
  )
}

export default App
