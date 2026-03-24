import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

const treatments = [
  {
    title: 'Revitalisation',
    description:
      'A comprehensive programme designed to restore vitality and reverse the signs of ageing through cellular regeneration and advanced diagnostics.',
    duration: '6 Days',
    price: 'From EUR 8,500',
    image: 'https://api.lanserhof.com/wp-content/uploads/2025/07/Medizin_11255-scaled-aspect-ratio-3-2-scaled.jpg',
  },
  {
    title: 'Master Detox',
    description:
      'An intensive cleansing programme that eliminates toxins, rebalances your metabolism, and restores your natural energy reserves.',
    duration: '7 Days',
    price: 'From EUR 9,200',
    image: 'https://api.lanserhof.com/wp-content/uploads/2025/07/LHS_Pool_0964_1-scaled.jpg',
  },
  {
    title: 'Brain Potential',
    description:
      'Unlock cognitive excellence with our neuroscience-based programme combining brain mapping, cognitive therapy, and neurological nutrition.',
    duration: '5 Days',
    price: 'From EUR 7,800',
    image: 'https://api.lanserhof.com/wp-content/uploads/2025/07/lanserhof-lans-bathhouse-large-aspect-ratio-3-2.jpeg',
  },
  {
    title: 'Life Reset',
    description:
      'A transformative journey addressing body, mind, and spirit — designed for those seeking a complete renewal of their approach to health.',
    duration: '14 Days',
    price: 'From EUR 18,500',
    image: 'https://api.lanserhof.com/wp-content/uploads/2025/03/Lanserhof_Lans_Outdoorpool_Alexander_Haiden_Schwimmerin2-scaled.jpg',
  },
]

export default function Treatments() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="treatments" ref={ref} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
        >
          Longevity Programmes
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-16 max-w-2xl"
        >
          Tailored Programmes for{' '}
          <span className="italic text-gold-dark">Every Journey</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment, i) => (
            <TreatmentCard key={treatment.title} treatment={treatment} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TreatmentCard({ treatment, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative h-[400px] md:h-[450px] overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gold text-xs tracking-[0.2em] uppercase">
              {treatment.duration}
            </span>
            <span className="w-8 h-px bg-gold/50" />
            <span className="text-white/60 text-xs tracking-wide">
              {treatment.price}
            </span>
          </div>

          <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
            {treatment.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed max-w-md transition-all duration-500 group-hover:text-white/90">
            {treatment.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase">
            <span>Discover More</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
