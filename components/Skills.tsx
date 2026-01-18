
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Languages & Databases",
      icon: "💻",
      skills: ["Python", "R", "C", "SQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "ML, DL & NLP",
      icon: "🧠",
      skills: ["Supervised/Unsupervised Learning", "Neural Networks", "CNN", "RNN", "LSTM", "GRU", "Model Evaluation", "Feature Engineering", "Hyperparameter Tuning", "Model Deployment"]
    },
    {
      title: "Generative AI",
      icon: "🤖",
      skills: ["RAG", "ReAct Agents & Tools", "LLM Integration", "LangChain", "LangGraph", "Embeddings & Vector Stores"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: "📊",
      skills: ["EDA", "Data Cleaning", "Matplotlib", "Seaborn", "Tableau", "PowerBI"]
    },
    {
      title: "Libraries & Platforms",
      icon: "📚",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Jupyter Notebook", "Google Colab", "VS Code", "Google Antigravity"]
    },
    {
      title: "Version Control",
      icon: "🔧",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-10 md:py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-extrabold text-brand-teal">Technical Skills</h2>
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
                <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-teal transition-colors cursor-default">
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
