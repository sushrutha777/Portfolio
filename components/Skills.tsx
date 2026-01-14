
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Generative AI & LLMs",
      icon: "🤖",
      skills: ["RAG Systems", "LangChain", "LangGraph", "ReAct Agents", "Embeddings", "Vector Stores"]
    },
    {
      title: "ML, DL & NLP",
      icon: "🧠",
      skills: ["Neural Networks", "CNN/RNN/LSTM", "Model Deployment", "Hyperparameter Tuning", "Streamlit", "Flask"]
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "SQL", "MySQL", "MongoDB", "R", "C"]
    },
    {
      title: "Data Analysis",
      icon: "📊",
      skills: ["EDA", "Matplotlib", "Seaborn", "Tableau", "PowerBI", "Pandas", "NumPy"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-brand-cyan tracking-[0.3em] uppercase mb-4">Core Competencies</h2>
        <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">Technical Ecosystem</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group glass p-8 rounded-[2rem] hover-3d border-slate-200 dark:border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">

              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-brand-cyan transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
