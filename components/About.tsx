
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-10 md:py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal to-brand-blue rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative glass rounded-3xl overflow-hidden aspect-[4/5] scanline">
            <img
              src="/profile.jpg"
              alt="Sushrutha Data Science Portfolio"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-base font-bold text-brand-teal tracking-[0.3em] uppercase mb-4">The Engineer</h2>
            <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              ML <span className="text-2xl align-middle px-1">•</span> Data Science <span className="text-2xl align-middle px-1">•</span> Generative AI
            </h3>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              Hi, I’m <span className="text-slate-900 dark:text-white font-semibold">Sushrutha S Kottary</span>, a 3rd year Computer Science and Data Science student at RNS Institute of Technology. I’m passionate about using data and machine learning to solve real world problems and drive meaningful impact.
            </p>
            <p>
              My interests span machine learning, deep learning and Gen AI with a strong focus on building Agentic AI Systems. As an AI Developer, I enjoy exploring how these technologies can be applied in practical and innovative ways to build intelligent, scalable solutions.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-brand-teal/10 hover:shadow-brand-teal/30 transform hover:-translate-y-1 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
