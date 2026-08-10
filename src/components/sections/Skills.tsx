"use client";

import { motion } from "framer-motion";
import { Database, Code2, BrainCircuit, Sparkles, BarChart3, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Databases",
    icon: Database,
    color: "text-sky-400",
    skills: ["Python", "R", "C", "SQL", "MySQL", "MongoDB", "Firestore"]
  },
  {
    title: "Machine Learning, Deep Learning & NLP",
    icon: BrainCircuit,
    color: "text-indigo-400",
    skills: ["Supervised & Unsupervised Learning", "Neural Networks", "CNN", "RNN", "Transformers", "Scikit-Learn", "TensorFlow", "Feature Engineering", "Model Evaluation", "Model Deployment", "MLOps"]
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    color: "text-teal-400",
    skills: ["RAG", "LLM Integration", "Embedding Models", "LangChain", "LangGraph", "LangSmith", "Vector Databases"]
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    color: "text-emerald-400",
    skills: ["Pandas", "NumPy", "Data Cleaning", "Data Visualization", "EDA", "Matplotlib", "Seaborn", "Tableau", "Power BI"]
  },
  {
    title: "Platforms",
    icon: Wrench,
    color: "text-orange-400/80",
    skills: ["VS Code", "Git/GitHub", "Google Antigravity", "Firebase", "Streamlit", "Render", "Hugging Face", "Docker", "GCP"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            My Tech Stack
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 text-slate-300 text-sm md:text-base font-medium border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
