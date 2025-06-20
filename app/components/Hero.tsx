'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-24 flex flex-col items-center text-center min-h-screen bg-[var(--background)]">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        style={{ color: 'var(--text)', letterSpacing: '1px' }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, color: 'var(--primary)' }}
      >
        I am <span className="text-[var(--primary)]">John Cohen</span>
      </motion.h1>
      <motion.p
        className="mt-6 text-lg md:text-xl max-w-2xl"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Passionate web developer, I turn ideas into elegant & high-performing websites.
      </motion.p>
   <motion.a
  href="#projects"
  className="mt-10 px-8 py-3 rounded-full font-semibold shadow-lg transition"
  style={{
    background: 'linear-gradient(90deg, var(--primary), var(--accent))',
    color: 'white',
    boxShadow: '0 8px 32px 0 rgba(191,167,106,0.15)',
    backdropFilter: 'blur(2px)',
    opacity: 0.95
  }}
  whileHover={{
    scale: 1.08,
    boxShadow: '0 12px 40px 0 rgba(191,167,106,0.25)',
    background: 'linear-gradient(90deg, var(--accent), var(--primary))',
    opacity: 1
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  See my projects
</motion.a>
    </section>
  )
}