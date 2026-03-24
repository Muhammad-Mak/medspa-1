import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://api.lanserhof.com/wp-content/uploads/2025/10/AJ_02100_LR-scaled-aspect-ratio-16-9-1-scaled.jpg"
          alt="Lumiere Wellness retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />
      </motion.div>

      {/* Overlay text - Clinique La Prairie style */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
        >
          Longevity Pioneer Since 1987
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-medium leading-[0.95] tracking-tight"
        >
          The Art of
          <br />
          <span className="italic text-gold-light">Longevity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 text-white/80 text-base md:text-lg font-light max-w-xl leading-relaxed"
        >
          Where cutting-edge science meets timeless wellness. Discover your path
          to vibrant health and enhanced longevity.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 px-10 py-4 bg-gold/90 hover:bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer"
        >
          Explore Our World
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
