import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FullWidthImage from './components/FullWidthImage'
import Treatments from './components/Treatments'
import Programs from './components/Programs'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <About />

      <FullWidthImage
        src="https://api.lanserhof.com/wp-content/uploads/2025/07/LHS_Treppe-Hochformat_People-scaled-aspect-ratio-3-2-scaled.jpg"
        alt="Wellness journey"
        subtitle="The Lumiere Experience"
        title={<>Where Science Meets <em>Serenity</em></>}
        description="Every detail of your stay is curated to support your transformation — from the architecture that breathes tranquility to the cuisine that nourishes from within."
        align="left"
      />

      <Treatments />

      <FullWidthImage
        src="https://api.lanserhof.com/wp-content/uploads/2025/07/lanserhof-lans-the-light-side-of-the-moon-scaled-aspect-ratio-3-2-scaled.jpg"
        alt="Evening at Lumiere"
        subtitle="A Sanctuary for the Senses"
        title={<>Designed for <em>Stillness</em></>}
        description="Our retreats are architectural masterpieces where every space is designed to promote healing, reflection, and profound rest."
        align="right"
      />

      <Programs />

      <FullWidthImage
        src="https://api.lanserhof.com/wp-content/uploads/2025/07/lanserhof-tegernsee-alexander-haiden-2020-suite-lounge-aspect-ratio-3-2.jpg"
        alt="Luxury suite"
        subtitle="Uncompromising Luxury"
        title={<>Live <em>Extraordinarily</em></>}
        align="center"
      />

      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
