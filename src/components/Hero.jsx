import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

const heroImages = [
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1920&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
]

const CYCLE_DURATION = 6000

export default function Hero() {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const containerScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, CYCLE_DURATION)
    return () => clearInterval(id)
  }, [advance])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Image carousel with Ken Burns zoom per slide */}
      <motion.div
        style={{ y, scale: containerScale }}
        className="absolute inset-0 w-full h-full"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Lumiere Wellness retreat"
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{
              scale: { duration: CYCLE_DURATION / 1000, ease: 'linear' },
              opacity: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70 z-[1]" />
      </motion.div>

      {/* Progress indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-0.5 w-8 bg-white/20 overflow-hidden cursor-pointer"
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && (
              <motion.div
                key={`bar-${current}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: CYCLE_DURATION / 1000, ease: 'linear' }}
                className="absolute inset-0 bg-gold origin-left"
              />
            )}
            {i < current && (
              <div className="absolute inset-0 bg-gold/50" />
            )}
          </button>
        ))}
      </div>

      {/* Decorative animated line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[15%] w-px h-16 bg-gold/40 origin-top z-10 hidden md:block"
      />

      {/* Overlay text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
        >
          Longevity Pioneer Since 1987
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-medium leading-[0.95] tracking-tight"
        >
          The Art of
          <br />
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block italic text-gold-light"
          >
            Longevity
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 text-white/80 text-base md:text-lg font-light max-w-xl leading-relaxed"
        >
          Where cutting-edge science meets timeless wellness. Discover your path
          to vibrant health and enhanced longevity.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 px-10 py-4 bg-gold/90 hover:bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 cursor-pointer"
        >
          Explore Our World
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
