
import React from 'react';
import ThreeScene from './ThreeScene.tsx';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 3D Neural Background */}
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-100">
        <ThreeScene />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black -z-5"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-5xl"
      >


        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
          Hey, I am <br />
          <span className="">Sushrutha S Kottary.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-brand-teal dark:text-brand-teal text-lg md:text-xl mb-12 leading-relaxed font-medium">
          Computer Science and Data Science student focused on applying machine learning, data science, and generative AI concepts through hands on projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold text-sm shadow-2xl hover:shadow-brand-teal/20 transition-all"
          >
            Explore Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sushruthaskottary777@gmail.com"
            className="w-full sm:w-auto glass text-slate-900 dark:text-white px-10 py-4 rounded-full font-bold text-sm border-slate-200 dark:border-white/10 hover:bg-white/5 transition-all"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { repeat: Infinity, duration: 2 }
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 hover:text-brand-teal transition-colors cursor-pointer z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
