import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Lead Developer",
      company: "TechCorp Solutions",
      location: "Paris, France",
      period: "2022 - Présent",
      description: "Direction d'une équipe de 5 développeurs. Architecture et développement d'applications web complexes. Mise en place de bonnes pratiques et de processus DevOps.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Lyon, France",
      period: "2020 - 2022",
      description: "Développement full-stack d'une plateforme SaaS utilisée par plus de 10k utilisateurs. Optimisation des performances et mise à l'échelle de l'infrastructure.",
      technologies: ["Vue.js", "Python", "Django", "Redis", "MySQL"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Création d'interfaces utilisateur modernes et responsives pour différents clients. Collaboration étroite avec les équipes design et backend.",
      technologies: ["React", "TypeScript", "Sass", "Figma", "Git"]
    },
    {
      id: 4,
      title: "Junior Developer",
      company: "DevStart",
      location: "Marseille, France",
      period: "2018 - 2019",
      description: "Premier poste en tant que développeur. Apprentissage des bonnes pratiques de développement et contribution à plusieurs projets clients.",
      technologies: ["JavaScript", "PHP", "HTML/CSS", "MySQL", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Mon <span className="text-gradient">expérience</span>
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
            Mon parcours professionnel et les expériences qui ont façonné mes compétences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-accent-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-primary-900 shadow-lg animate-glow"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-primary-800 p-6 rounded-2xl shadow-lg card-hover">
                    <div className="flex items-center gap-2 text-accent-500 mb-2">
                      <Calendar size={16} />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                    
                    <div className="flex items-center gap-4 text-primary-600 dark:text-primary-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-primary-700 dark:text-primary-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;