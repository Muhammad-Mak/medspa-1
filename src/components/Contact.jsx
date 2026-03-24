import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
            >
              Begin Your{' '}
              <span className="italic text-gold-light">Journey</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-warm-gray-light text-base leading-relaxed mb-12 max-w-lg"
            >
              Our dedicated concierge team is available to guide you through
              our programmes and help you find the perfect wellness journey.
              Every stay is tailored to your individual needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <a href="tel:+41000000000" className="flex items-center gap-4 text-white/80 hover:text-gold transition-colors duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-warm-gray-light tracking-wide uppercase">Phone</p>
                  <p className="text-sm mt-0.5">+41 (0) 21 989 33 00</p>
                </div>
              </a>

              <a href="mailto:concierge@lumiere.com" className="flex items-center gap-4 text-white/80 hover:text-gold transition-colors duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-warm-gray-light tracking-wide uppercase">Email</p>
                  <p className="text-sm mt-0.5">concierge@lumiere.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-warm-gray-light tracking-wide uppercase">Address</p>
                  <p className="text-sm mt-0.5">Chemin de la Wellness 42, 1815 Montreux</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs text-warm-gray-light tracking-wide uppercase mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-transparent border-b border-white/20 text-white py-3 text-sm focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-white/20"
                    placeholder="Alexandra"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs text-warm-gray-light tracking-wide uppercase mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-transparent border-b border-white/20 text-white py-3 text-sm focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-white/20"
                    placeholder="von Hessen"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-warm-gray-light tracking-wide uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-sm focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-white/20"
                  placeholder="alexandra@example.com"
                />
              </div>

              <div>
                <label htmlFor="programme" className="block text-xs text-warm-gray-light tracking-wide uppercase mb-2">
                  Programme of Interest
                </label>
                <select
                  id="programme"
                  className="w-full bg-transparent border-b border-white/20 text-white/60 py-3 text-sm focus:border-gold focus:outline-none transition-colors duration-300 cursor-pointer"
                >
                  <option value="" className="bg-charcoal">Select a programme</option>
                  <option value="revitalisation" className="bg-charcoal">Revitalisation</option>
                  <option value="detox" className="bg-charcoal">Master Detox</option>
                  <option value="brain" className="bg-charcoal">Brain Potential</option>
                  <option value="life-reset" className="bg-charcoal">Life Reset</option>
                  <option value="screening" className="bg-charcoal">Health Screening</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-warm-gray-light tracking-wide uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-sm focus:border-gold focus:outline-none transition-colors duration-300 resize-none placeholder:text-white/20"
                  placeholder="Tell us about your wellness goals..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-light text-charcoal text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer group"
              >
                Send Enquiry
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
