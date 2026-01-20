
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [

    {
      id: 'rag',
      title: 'End-to-End Agentic RAG',
      description: 'Built a Data Science agentic system supporting PDFs, text files, and website URLs.',
      challenge: 'Creating a grounded reasoning engine that switches tools based on query intent.',
      solution: 'Designed a ReAct agent using LangChain + LangGraph with Gemini 2.5 integration.',
      tags: ['LangChain', 'LangGraph', 'Gemini AI', 'Streamlit'],
      codeLink: 'https://github.com/sushrutha777/AgenticRAG-with-Web-Search-and-Document-Search',
      liveLink: 'https://end-to-end-rag-document-search-by-sushrutha-s-kottary.streamlit.app/',
      image: '/agentic-rag.png'
    },
    {
      id: 'stock',
      title: 'Stock Movement Reason Finder',
      description: 'Developed a tool to analyze NIFTY 100 stocks and generate AI driven explanations for their price movements.',
      challenge: 'Standard tracking misses the full picture, and reading many individual news headlines is confusing.',
      solution: 'Combines the top 5 news headlines into one clear summary for Gemini to generate an easy to understand explanation.',
      tags: ['Gemini API', 'Finance', 'News RSS', 'Python'],
      codeLink: 'https://github.com/sushrutha777/Stock_Movement_Reason_Finder',
      liveLink: 'https://stock-movement-reason-finder.streamlit.app/',
      image: '/stock-movement.png'
    },
    {
      id: 'invoice',
      title: 'Multi-Language Invoice Q&A',
      description: 'Multimodal AI application where users upload invoices (PDF/Images) and ask questions directly from the document context.',
      challenge: 'Converting diverse document formats (PDFs, images) into Gemini compatible PNG byte streams for seamless processing.',
      solution: 'Used Gemini 2.5 Flash to direct analyze PNG bytes for rapid data extraction.',
      tags: ['Gemini 2.5 Flash', 'Computer Vision', 'NLP'],
      codeLink: 'https://github.com/sushrutha777/Multi-Language-Invoice-Extractor',
      liveLink: 'https://multi-language-invoice-extractor-by-sushrutha-s-kottary.streamlit.app/',
      image: '/invoice-extractor.png'
    },
    {
      id: 'sentiment',
      title: 'Movie Review Sentiment Analysis',
      description: 'NLP Machine Learning project using a fine tuned DistilBERT model to classify reviews.',
      challenge: 'Achieving 92% test accuracy with robust tokenization using Hugging Face Transformers.',
      solution: 'Displays predictions with confidence scores for better interpretability.',
      tags: ['DistilBERT', 'Hugging Face', 'NLP', 'Sentiment Analysis'],
      codeLink: 'https://github.com/sushrutha777/Movie-Review-Analysis',
      liveLink: 'https://movie-review-analysis-by-sushrutha.streamlit.app/',
      image: '/sentiment-analysis.png'
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-10 md:py-16">
      <div className="mb-16">
        <h2 className="text-4xl font-display font-extrabold text-brand-teal">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-20">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group glass rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row border-slate-200 dark:border-white/5 hover:border-brand-teal/30 transition-all duration-500"
          >
            <div className="lg:w-1/2 overflow-hidden relative">
              <img
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                alt={`${p.title} - Sushrutha Data Science Portfolio`}
              />

            </div>

            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-extrabold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-teal transition-colors">{p.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {p.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Challenge</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">{p.challenge}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Architectural Fix</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">{p.solution}</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a href={p.codeLink} className="text-slate-900 dark:text-white flex items-center gap-2 font-bold text-sm hover:text-brand-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  Source Code
                </a>
                <a href={p.liveLink} className="text-slate-900 dark:text-white flex items-center gap-2 font-bold text-sm hover:text-brand-teal transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
