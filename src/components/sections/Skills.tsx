"use client";

import { motion } from "framer-motion";
import { Database, Code2, BrainCircuit, Sparkles, BarChart3, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Databases",
    icon: Database,
    color: "text-sky-400",
    skills: [
      { name: "Python", desc: "Primary language for ML & backend" },
      { name: "SQL & NoSQL", desc: "MySQL, MongoDB, Firestore" },
      { name: "R", desc: "Statistical computing & data analysis" }
    ]
  },
  {
    title: "ML, DL & NLP",
    icon: BrainCircuit,
    color: "text-indigo-400",
    skills: [
      { name: "Neural Networks", desc: "CNN, RNN, LSTM, GRU" },
      { name: "Core ML", desc: "Supervised/Unsupervised, Feature Eng." },
      { name: "Model Deployment", desc: "End-to-end model lifecycle" }
    ]
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    color: "text-teal-400",
    skills: [
      { name: "RAG & Agents", desc: "ReAct Agents, Tool Integration" },
      { name: "LangChain & LangGraph", desc: "Frameworks for LLM apps" },
      { name: "Vector Stores", desc: "Embeddings & Semantic Search" }
    ]
  },
  {
    title: "Data Analysis & Libraries",
    icon: BarChart3,
    color: "text-emerald-400",
    skills: [
      { name: "Data Science Stack", desc: "Pandas, NumPy, Scikit-Learn" },
      { name: "Deep Learning", desc: "TensorFlow" },
      { name: "Visualization", desc: "Matplotlib, Seaborn, Tableau, PowerBI" }
    ]
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    color: "text-orange-400/80",
    skills: [
      { name: "Git & GitHub", desc: "Version control & collaboration" },
      { name: "Cloud & Deployment", desc: "Firebase, Docker, Render, Streamlit, Hugging Face" },
      { name: "Dev & AI Tools", desc: "VS Code, Google Antigravity" }
    ]
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

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex items-start gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${category.color}`}>
                      <Code2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{skill.name}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                    </div>
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
