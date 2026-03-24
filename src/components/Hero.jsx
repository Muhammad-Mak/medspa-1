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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imgBrightness = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background image with parallax + Ken Burns on load */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.img
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `brightness(${imgBrightness})` }}
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80"
          alt="Lumiere Wellness retreat"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70"
        />
      </motion.div>

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
