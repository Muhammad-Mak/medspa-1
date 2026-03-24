import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from './useInView'

const footerLinks = {
  'Programmes': ['Revitalisation', 'Master Detox', 'Brain Potential', 'Life Reset', 'Health Screening'],
  'Destinations': ['Swiss Alps', 'North Sea', 'Alpine Lake'],
  'Lumiere': ['Our Story', 'Medical Team', 'Research', 'Careers', 'Press'],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <footer ref={ref} className="bg-charcoal border-t border-white/5">
      {/* Newsletter */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 border-b border-white/5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-heading text-2xl md:text-3xl text-white mb-2"
            >
              Stay Informed
            </motion.h3>
            <p className="text-warm-gray text-sm">
              Receive our Health Guide and exclusive wellness insights.
            </p>
          </div>

          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border border-white/20 text-white text-sm px-5 py-3 w-full md:w-72 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-white/30"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-charcoal text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-2xl text-white tracking-wide">
              Lumi<span className="text-gold">e</span>re
            </span>
            <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mt-1">
              Wellness & Longevity
            </p>
            <p className="text-warm-gray text-sm mt-6 leading-relaxed max-w-xs">
              Redefining what it means to age gracefully through the convergence
              of science and luxury.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-warm-gray text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs">
            &copy; 2026 Lumiere Wellness. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Imprint'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-warm-gray text-xs hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
