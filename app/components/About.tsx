import React from 'react';
import { Code, Lightbulb, Users, Zap, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-7 h-7" />,
      title: "Code d'Excellence",
      description: "Architecture propre, maintenable et optimisée pour la performance"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Innovation Continue",
      description: "Veille technologique constante et adoption des meilleures pratiques"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Leadership Technique",
      description: "Mentorat d'équipes et collaboration cross-fonctionnelle"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Performance Optimale",
      description: "Applications ultra-rapides avec une expérience utilisateur fluide"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Qualité Premium",
      description: "Standards élevés et attention méticuleuse aux détails"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Vision Stratégique",
      description: "Solutions alignées sur les objectifs business à long terme"
    }
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "5+", label: "Années d'expérience" },
    { number: "15+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Satisfaction client" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50/30 dark:from-primary-900 dark:via-primary-800 dark:to-primary-900">
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
              À propos de moi
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-8">
            Passionné par l'<span className="text-gradient">excellence</span>
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-4xl mx-auto leading-relaxed">
            Développeur full-stack senior avec une expertise approfondie dans la création 
            d'applications web modernes, performantes et scalables.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/50 dark:bg-primary-800/50 backdrop-blur-sm rounded-2xl border border-primary-200/20 dark:border-primary-700/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-primary-600 dark:text-primary-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                Bonjour ! Je suis <strong className="text-accent-600">Alexandre Dubois</strong>, 
                un développeur full-stack passionné par la création d'expériences numériques 
                exceptionnelles. Mon parcours de plus de 5 ans m'a permis de maîtriser un 
                écosystème technologique complet, de React à Node.js, en passant par 
                l'architecture cloud et les bases de données.
              </p>
              <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                Ce qui m'anime vraiment, c'est de <strong className="text-accent-600">transformer 
                des défis complexes en solutions élégantes</strong>. Chaque projet est une 
                opportunité d'innover, d\'apprendre et de repousser les limites du possible 
                tout en maintenant les plus hauts standards de qualité.
              </p>
              <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                Mon approche combine <strong className="text-accent-600">expertise technique</strong>, 
                <strong className="text-accent-600"> vision stratégique</strong> et 
                <strong className="text-accent-600"> attention aux détails</strong> pour 
                livrer des solutions qui dépassent les attentes.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {["React Expert", "Node.js", "TypeScript", "AWS", "Architecture"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-accent-500/10 to-accent-600/10 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium border border-accent-500/20"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/70 dark:bg-primary-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-200/20 dark:border-primary-700/20 card-hover group"
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-3 text-primary-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;