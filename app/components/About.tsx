'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="py-16 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">À propos</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Je suis un développeur fullstack basé à [ville], spécialisé en Next.js, TypeScript et TailwindCSS.
        Je crée des expériences web fluides et modernes, avec une attention particulière aux détails et aux animations soignées.
      </p>
    </motion.section>
  )
}