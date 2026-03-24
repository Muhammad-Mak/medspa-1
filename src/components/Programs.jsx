import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

const programs = [
  {
    number: '01',
    title: 'Advanced Health Screening',
    description:
      'Over 300 biomarkers analysed through our proprietary diagnostic technology, providing an unparalleled understanding of your biological age and health trajectory.',
  },
  {
    number: '02',
    title: 'Stem Cell Protocol',
    description:
      'Harness the regenerative power of stem cell therapy with our pioneering protocols, designed to rejuvenate tissue, boost immunity, and slow cellular ageing.',
  },
  {
    number: '03',
    title: 'Nutritional Optimisation',
    description:
      'Personalised nutrition programmes crafted by our team of clinical nutritionists, using DNA-based dietary analysis and microbiome profiling.',
  },
  {
    number: '04',
    title: 'Movement & Recovery',
    description:
      'Bespoke physiotherapy and movement programmes combining ancient practices with modern sports science for optimal physical performance.',
  },
  {
    number: '05',
    title: 'Mind & Spirit',
    description:
      'Holistic mental wellness through neurofeedback, mindfulness practices, and evidence-based psychological support for lasting inner balance.',
  },
]

export default function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="programs" ref={ref} className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left side - sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            >
              The Lumiere Method
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
            >
              Five Pillars of{' '}
              <span className="italic text-gold-light">Wellness</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-warm-gray-light text-base leading-relaxed max-w-md"
            >
              Our integrated methodology addresses every dimension of health,
              creating a synergy between body, mind, and environment that
              delivers lasting transformation.
            </motion.p>
          </div>

          {/* Right side - program list */}
          <div className="space-y-0">
            {programs.map((program, i) => (
              <ProgramItem key={program.number} program={program} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgramItem({ program, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.3)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-white/10 py-10 cursor-pointer hover:border-gold/30 transition-colors duration-500"
    >
      <div className="flex items-start gap-6 md:gap-10">
        <span className="font-heading text-gold/40 text-lg md:text-xl mt-1 group-hover:text-gold transition-colors duration-500">
          {program.number}
        </span>
        <div>
          <h3 className="font-heading text-xl md:text-2xl text-white mb-3 group-hover:text-gold-light transition-colors duration-500">
            {program.title}
          </h3>
          <p className="text-warm-gray-light text-sm md:text-base leading-relaxed max-w-lg">
            {program.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
