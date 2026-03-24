import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const isInView = useInView(sectionRef, 0.2)

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
        >
          Our Philosophy
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-8"
            >
              At the Heart of the
              <br />
              <span className="italic text-gold-dark">Secret of Life</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-6"
            >
              Lumiere Wellness represents the pinnacle of excellence in preventive
              medicine and longevity science. Our holistic approach combines
              cutting-edge diagnostics with time-honoured healing traditions,
              delivering transformative results that redefine what it means to age
              gracefully.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-10"
            >
              Our world-renowned team of physicians, therapists, and wellness
              experts work together to create a bespoke journey toward vibrant
              health and enhanced longevity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-12"
            >
              {[
                { number: '35+', label: 'Years of Excellence' },
                { number: '12,000', label: 'Guests Annually' },
                { number: '200+', label: 'Medical Experts' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl md:text-4xl text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-warm-gray text-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image with parallax */}
          <div ref={imgRef} className="relative overflow-hidden h-[500px] lg:h-[650px]">
            <motion.img
              style={{ y: imgY }}
              src="https://api.lanserhof.com/wp-content/uploads/2025/07/AJ_01954-2-scaled.jpg"
              alt="Wellness consultation"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
