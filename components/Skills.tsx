
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (direction === 'left') {
        if (scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }
  };

  const categories = [
    {
      title: "Languages & Databases",
      skills: ["Python", "R", "C", "SQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "ML, DL & NLP",
      skills: ["Supervised/Unsupervised Learning", "Neural Networks", "CNN", "RNN", "LSTM", "GRU", "Model Evaluation", "Feature Engineering", "Hyperparameter Tuning", "Model Deployment"]
    },
    {
      title: "Generative AI",
      skills: ["RAG", "ReAct Agents & Tools", "LLM Integration", "LangChain", "LangGraph", "Embeddings & Vector Stores"]
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["EDA", "Data Cleaning", "Matplotlib", "Seaborn", "Tableau", "PowerBI"]
    },
    {
      title: "Libraries & Platforms",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Jupyter Notebook", "Google Colab", "VS Code", "Google Antigravity"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-10 md:py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-extrabold text-brand-teal">Technical Skills</h2>
        <div className="md:hidden mt-4 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <button onClick={() => scroll('left')} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors active:scale-95" aria-label="Scroll left">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <span className="animate-pulse">Swipe</span>
          <button onClick={() => scroll('right')} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors active:scale-95" aria-label="Scroll right">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>

      <div ref={carouselRef} className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:snap-none">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="w-[85vw] sm:w-[400px] md:w-auto shrink-0 snap-center group glass p-8 rounded-[2rem] hover-3d border-slate-200 dark:border-white/5"
          >
            <div className="mb-6">
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
