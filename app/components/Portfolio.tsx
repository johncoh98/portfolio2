import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiements et gestion des commandes",
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Application mobile de fitness avec suivi d'activités et programmes personnalisés",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Redux", "Node.js"],
      category: "mobile",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Dashboard analytique avec graphiques interactifs et rapports en temps réel",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "AI Chatbot",
      description: "Chatbot intelligent avec traitement du langage naturel",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      category: "ai",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "Suivi de portefeuille crypto avec alertes et analyses techniques",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "TradingView", "MongoDB"],
      category: "web",
      github: "#",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'IA' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-primary-50 dark:bg-primary-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Mon <span className="text-gradient">portfolio</span>
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
            Découvrez quelques-uns de mes projets récents et les technologies utilisées
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-white dark:bg-primary-700 text-primary-700 dark:text-primary-200 hover:bg-accent-100 dark:hover:bg-primary-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-primary-700 rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary-900 hover:bg-accent-500 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary-900 hover:bg-accent-500 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary-600 dark:text-primary-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;