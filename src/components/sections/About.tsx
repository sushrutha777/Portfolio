"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >

          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            About
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2 inline-block">
              About me
            </h3>
            
            <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">
              I am a proactive Data Science undergrad with a profound enthusiasm for developing data-driven solutions and exploring innovative technologies in Machine Learning and Generative AI. 
              Currently, I am delving deeply into Python and modern frameworks to build production RAG systems and construct robust AI applications. 
              Always eager to learn and adapt, I look forward to contributing to impactful projects!
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/sushrutha777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm font-medium">
                <Github size={16} /> Github
              </a>
              <a href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm font-medium">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sushruthaskottary777@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm font-medium">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
