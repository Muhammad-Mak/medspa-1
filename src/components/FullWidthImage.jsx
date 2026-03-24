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
  const isInView = useInView(textRef, 0.3)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const alignClasses = {
    left: 'items-start text-left pl-6 md:pl-20 lg:pl-32',
    center: 'items-center text-center px-6',
    right: 'items-end text-right pr-6 md:pr-20 lg:pr-32',
  }

  return (
    <section ref={ref} className={`relative w-full ${height} overflow-hidden`}>
      {/* Full-bleed image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      {/* Overlay text - Clinique La Prairie style */}
      <div
        ref={textRef}
        className={`relative z-10 flex flex-col justify-center h-full ${alignClasses[align]}`}
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-white/80 text-base md:text-lg font-light max-w-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
