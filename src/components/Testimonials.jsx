import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { useInView } from './useInView'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lumiere transformed my understanding of health. After years of searching for genuine wellness solutions, I found a place that truly delivers on its promises. The medical team is extraordinary.',
    name: 'Alexandra von Hessen',
    title: 'Entrepreneur, Zurich',
    rating: 5,
  },
  {
    quote:
      'The Master Detox programme was nothing short of life-changing. I arrived exhausted and left feeling twenty years younger. The attention to detail and personalised care is unmatched anywhere in the world.',
    name: 'Jonathan Hartley',
    title: 'CEO, London',
    rating: 5,
  },
  {
    quote:
      'As a physician myself, I was deeply impressed by the scientific rigour behind every treatment. This is not a luxury spa — it is the future of preventive medicine, and I recommend it to all my patients.',
    name: 'Dr. Marie Laurent',
    title: 'Cardiologist, Paris',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.2)
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-dark">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-12"
          >
            Guest Experiences
          </motion.p>

          <div className="relative min-h-[280px] flex items-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed italic mb-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-charcoal font-medium text-sm tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-warm-gray text-sm mt-1">
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'bg-gold w-6' : 'bg-charcoal/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
