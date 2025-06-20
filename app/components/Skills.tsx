import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Excellence",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 98, description: "Expert en développement d'interfaces modernes" },
        { name: "TypeScript", level: 95, description: "Typage fort et architecture scalable" },
        { name: "Tailwind CSS", level: 96, description: "Design systems et UI/UX avancés" },
        { name: "Vue.js/Nuxt", level: 88, description: "Framework alternatif maîtrisé" }
      ]
    },
    {
      title: "Backend Mastery",
      icon: "⚡",
      skills: [
        { name: "Node.js/Express", level: 94, description: "APIs RESTful et GraphQL performantes" },
        { name: "Python/Django", level: 90, description: "Développement backend robuste" },
        { name: "PostgreSQL", level: 92, description: "Bases de données relationnelles optimisées" },
        { name: "MongoDB", level: 86, description: "NoSQL et données non-structurées" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS/GCP", level: 88, description: "Architecture cloud et microservices" },
        { name: "Docker/K8s", level: 85, description: "Conteneurisation et orchestration" },
        { name: "CI/CD", level: 90, description: "Pipelines automatisés et déploiement" },
        { name: "Monitoring", level: 82, description: "Observabilité et performance" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-accent-50/20 to-primary-50 dark:from-primary-800 dark:via-primary-900 dark:to-primary-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-3 bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-full mb-6 backdrop-blur-sm border border-accent-500/20"
          >
            <span className="text-accent-500 font-medium text-sm tracking-wider uppercase">
              Expertise Technique
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-8">
            Stack <span className="text-gradient">technologique</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-4xl mx-auto leading-relaxed">
            Maîtrise approfondie des technologies modernes pour créer des solutions complètes et performantes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 dark:bg-primary-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary-200/20 dark:border-primary-700/20 card-hover">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold font-serif text-primary-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="font-bold text-primary-900 dark:text-white">
                            {skill.name}
                          </span>
                          <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-lg font-bold text-accent-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: "easeOut"
                            }}
                            className="bg-gradient-to-r from-accent-500 to-accent-600 h-full rounded-full relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1,
                            type: "spring"
                          }}
                          className="absolute right-0 top-0 w-3 h-3 bg-accent-500 rounded-full shadow-lg"
                          style={{ left: `${skill.level}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold font-serif mb-8 text-primary-900 dark:text-white">
            Technologies additionnelles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL", "Redis", "Elasticsearch", "Kafka", "Terraform", 
              "Jest", "Cypress", "Figma", "Prisma", "Supabase", "Vercel", "Netlify"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-accent-500/10 to-accent-600/10 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium border border-accent-500/20 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;