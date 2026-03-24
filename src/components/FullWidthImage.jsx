import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

export default function FullWidthImage({
  src,
  alt,
  title,
  subtitle,
  description,
  align = 'center',
  height = 'h-[70vh] md:h-[80vh]',
}) {
  const ref = useRef(null)
  const textRef = useRef(null)
  const isInView = useInView(ref, 0.15)
  const textInView = useInView(textRef, 0.3)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 0.4, 0.4, 0.6])

  const alignClasses = {
    left: 'items-start text-left pl-6 md:pl-20 lg:pl-32',
    center: 'items-center text-center px-6',
    right: 'items-end text-right pr-6 md:pr-20 lg:pr-32',
  }

  return (
    <section ref={ref} className={`relative w-full ${height} overflow-hidden`}>
      {/* Full-bleed image with parallax + zoom on scroll + reveal */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ clipPath: 'inset(15% 0)' }}
          animate={isInView ? { clipPath: 'inset(0% 0)' } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <motion.img
            style={{ scale: imgScale }}
            src={src}
            alt={alt}
            className="w-full h-[120%] object-cover will-change-transform"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-charcoal"
        />
      </motion.div>

      {/* Decorative horizontal line that grows in */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={textInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-1/2 z-10 h-px w-20 bg-gold/50 hidden md:block ${
          align === 'right' ? 'right-20 lg:right-32 origin-right' :
          align === 'left' ? 'left-20 lg:left-32 origin-left' :
          'left-1/2 -translate-x-1/2 origin-center'
        }`}
        style={{ marginTop: '-80px' }}
      />

      {/* Overlay text */}
      <div
        ref={textRef}
        className={`relative z-10 flex flex-col justify-center h-full ${alignClasses[align]}`}
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={textInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={textInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-white/80 text-base md:text-lg font-light max-w-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
