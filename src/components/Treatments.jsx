import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

const treatments = [
  {
    title: 'Revitalisation',
    description:
      'A comprehensive programme designed to restore vitality and reverse the signs of ageing through cellular regeneration and advanced diagnostics.',
    duration: '6 Days',
    price: 'From EUR 8,500',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    title: 'Master Detox',
    description:
      'An intensive cleansing programme that eliminates toxins, rebalances your metabolism, and restores your natural energy reserves.',
    duration: '7 Days',
    price: 'From EUR 9,200',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
  },
  {
    title: 'Brain Potential',
    description:
      'Unlock cognitive excellence with our neuroscience-based programme combining brain mapping, cognitive therapy, and neurological nutrition.',
    duration: '5 Days',
    price: 'From EUR 7,800',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
  },
  {
    title: 'Life Reset',
    description:
      'A transformative journey addressing body, mind, and spirit — designed for those seeking a complete renewal of their approach to health.',
    duration: '14 Days',
    price: 'From EUR 18,500',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
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
  const imgRef = useRef(null)
  const isInView = useInView(ref, 0.2)

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  // Alternate reveal directions for visual variety
  const revealDirection = index % 2 === 0
    ? { clipPath: 'inset(0 100% 0 0)' }
    : { clipPath: 'inset(0 0 0 100%)' }
  const revealDone = { clipPath: 'inset(0 0% 0 0%)' }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div ref={imgRef} className="relative h-[400px] md:h-[450px] overflow-hidden">
        {/* Clip-path curtain reveal + parallax float */}
        <motion.div
          initial={revealDirection}
          animate={isInView ? revealDone : {}}
          transition={{ duration: 1.2, delay: index * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <motion.img
            style={{ y: imgY }}
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/10 transition-opacity duration-500 group-hover:via-charcoal/60" />

        {/* Content overlay with staggered entrance */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 overlay-text">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-gold text-xs tracking-[0.2em] uppercase">
              {treatment.duration}
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: index * 0.12 + 0.8 }}
              className="h-px bg-gold/50 inline-block"
            />
            <span className="text-white/60 text-xs tracking-wide">
              {treatment.price}
            </span>
          </motion.div>

          <h3 className="font-heading text-2xl md:text-3xl text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
            {treatment.title}
          </h3>

          <p className="text-white/80 text-sm leading-relaxed max-w-md transition-all duration-500 group-hover:text-white/90">
            {treatment.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase overflow-hidden">
            <motion.div
              className="flex items-center gap-2"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span>Discover More</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
