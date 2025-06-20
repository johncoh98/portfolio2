'use client'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Projet 1', description: 'Site e-commerce React + Stripe', image: '/project1.png' },
  { title: 'Projet 2', description: 'Landing page animée', image: '/project2.png' },
  { title: 'Projet 3', description: 'Dashboard SaaS', image: '/project3.png' },
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Mes projets</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
