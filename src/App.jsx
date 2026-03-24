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
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        alt="Wellness journey"
        subtitle="The Lumiere Experience"
        title={<>Where Science Meets <em>Serenity</em></>}
        description="Every detail of your stay is curated to support your transformation — from the architecture that breathes tranquility to the cuisine that nourishes from within."
        align="left"
      />

      <Treatments />

      <FullWidthImage
        src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1920&q=80"
        alt="Evening at Lumiere"
        subtitle="A Sanctuary for the Senses"
        title={<>Designed for <em>Stillness</em></>}
        description="Our retreats are architectural masterpieces where every space is designed to promote healing, reflection, and profound rest."
        align="right"
      />

      <Programs />

      <FullWidthImage
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80"
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
