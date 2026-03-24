import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'
import { MapPin } from 'lucide-react'

const destinations = [
  {
    name: 'Swiss Alps',
    location: 'Montreux, Switzerland',
    description:
      'Nestled in the heart of the Swiss Alps, our flagship retreat offers panoramic lake views and world-class medical facilities.',
    image: 'https://api.lanserhof.com/wp-content/uploads/2024/06/lanserhof_lans-outdoor-alexander_haiden-aspect-ratio-3-2.jpg',
  },
  {
    name: 'North Sea',
    location: 'Sylt, Germany',
    description:
      'Where the healing power of the North Sea breeze meets architectural excellence, creating a sanctuary for deep restoration.',
    image: 'https://api.lanserhof.com/wp-content/uploads/2023/06/LHS_Gebaeude_Sonnenuntergang-scaled.jpg',
  },
  {
    name: 'Alpine Lake',
    location: 'Tegernsee, Germany',
    description:
      'Surrounded by pristine alpine landscapes, this retreat combines Bavarian tranquility with cutting-edge longevity science.',
    image: 'https://api.lanserhof.com/wp-content/uploads/2024/06/lanserhof_tegernsee_pool-alexander-haiden-aspect-ratio-3-2-1.jpg',
  },
]

export default function Destinations() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="destinations" ref={ref} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Our Retreats
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] max-w-2xl mx-auto"
          >
            Three Extraordinary{' '}
            <span className="italic text-gold-dark">Destinations</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ destination, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
    >
      <div className="relative h-[350px] md:h-[450px] overflow-hidden mb-6">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <MapPin size={14} className="text-gold" />
        <span className="text-warm-gray text-xs tracking-[0.15em] uppercase">
          {destination.location}
        </span>
      </div>

      <h3 className="font-heading text-2xl text-charcoal mb-3 group-hover:text-gold-dark transition-colors duration-300">
        {destination.name}
      </h3>

      <p className="text-warm-gray text-sm leading-relaxed">
        {destination.description}
      </p>
    </motion.div>
  )
}
