
import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certs = [
    "Ultimate RAG Bootcamp (LangChain, LangGraph)",
    "Generative AI With Large Language Models",
    "DeepLearning.AI TensorFlow Developer",
    "IBM Data Science Professional Certificate",
    "Complete Data Science, ML, NLP Bootcamp"
  ];

  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-sm font-bold text-brand-cyan tracking-[0.3em] uppercase mb-4">Validated Skills</h2>
        <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">Credentials</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl border-slate-200 dark:border-white/5 flex flex-col justify-between group"
          >
            <div>

              <h4 className="text-slate-800 dark:text-slate-200 font-bold leading-snug">{cert}</h4>
            </div>
            <a href="#" className="mt-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-cyan transition-colors">
              Verify Credential
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
