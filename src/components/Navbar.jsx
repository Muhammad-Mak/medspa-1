import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Treatments', href: '#treatments' },
  { name: 'Programs', href: '#programs' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <a href="#" className="relative z-10">
              <span className="font-heading text-2xl lg:text-3xl font-semibold text-white tracking-wide">
                Lumi<span className="text-gold">e</span>re
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray-light font-light">
                Wellness & Longevity
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-white/80 hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <a href="tel:+41000000000" className="text-white/70 hover:text-gold transition-colors duration-300 cursor-pointer" aria-label="Call us">
                <Phone size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:info@lumiere.com" className="text-white/70 hover:text-gold transition-colors duration-300 cursor-pointer" aria-label="Email us">
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#contact"
                className="ml-4 px-7 py-2.5 border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 text-white cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-heading text-3xl text-white hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 px-10 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
              >
                Book Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
