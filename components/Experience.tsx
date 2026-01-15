
import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-10 md:py-16">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-display font-extrabold text-brand-cyan">Work Experience</h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 -ml-[1px] w-[2px] h-full bg-slate-200 dark:bg-slate-800"></div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-14 md:pl-0 md:pr-1/2 mb-20 group"
        >


          <div className="md:mr-16 glass p-8 rounded-3xl border-slate-200 dark:border-white/5 hover:border-brand-cyan/20 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">July 2025</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Lloyds Banking Group</h4>
              </div>
              <div className="bg-slate-100 dark:bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest self-start">Job Simulation</div>
            </div>

            <p className="text-brand-purple font-semibold text-sm mb-4">Data Science Intern</p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-brand-cyan">•</span>
                <span>Conducted EDA on customer churn dataset using Python (Pandas, Matplotlib) uncover patterns.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-cyan">•</span>
                <span>Developed classification models (Logistic Regression, Random Forest) achieving ~77% accuracy.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-cyan">•</span>
                <span>Diagnosed class imbalance (23% churn cases) as root cause of poor recall for minority class customers.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
