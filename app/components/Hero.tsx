import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-400"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.02,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="bg-accent-500 rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block p-4 bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-full mb-6 backdrop-blur-sm border border-accent-500/20"
            >
              <span className="text-accent-500 font-medium text-sm tracking-wider uppercase">
                Développeur Full Stack
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-serif mb-6 leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Alexandre
              </motion.span>
              <motion.span 
                className="text-gradient block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Dubois
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Je crée des expériences numériques exceptionnelles qui allient 
            <span className="text-accent-500 font-medium"> innovation</span>, 
            <span className="text-accent-500 font-medium"> performance</span> et 
            <span className="text-accent-500 font-medium"> élégance</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a href="#contact" className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-4">
              <Mail size={22} />
              Collaborons ensemble
            </a>
            <a href="#" className="btn-secondary inline-flex items-center gap-3 text-lg px-10 py-4">
              <Download size={22} />
              Télécharger CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white/10 dark:bg-primary-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 hover:text-accent-500 hover:bg-accent-500/10 transition-all duration-300 border border-primary-200/20 dark:border-primary-700/20"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-primary-500 hover:text-accent-500 transition-all duration-300 group"
            >
              <span className="text-sm font-medium mb-3 tracking-wide">Découvrir mon univers</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:border-accent-500"
              >
                <ChevronDown size={16} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;