"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    id: "rag",
    title: "End-to-End Agentic RAG System",
    points: [
      "Built an agentic RAG system with conversational memory supporting PDFs, text files, and website URLs.",
      "Implemented a ReAct agent with LangChain and LangGraph for vector search, Wikipedia search and web search.",
      "Integrated Gemini 2.5 Flash with Google AI embeddings for accurate, grounded responses."
    ],
    tags: ["Python", "LangChain", "LangGraph", "Gemini 2.5 Flash", "Streamlit"],
    codeLink: "https://github.com/sushrutha777/AgenticRAG-with-Web-Search-and-Document-Search",
    liveLink: "https://end-to-end-rag-document-search-by-sushrutha-s-kottary.streamlit.app/",
    image: "/agentic-rag.png",
  },
  {
    id: "stock",
    title: "Stock Movement Reason Finder",
    points: [
      "Built a FastAPI based tool to analyze NIFTY100 stock movements, identifying top gainers and losers.",
      "Integrated Google News RSS and Gemini AI to explain major price spikes with real time news reasoning.",
      "Designed a modular backend for stock data fetching, news aggregation, and AI based insights."
    ],
    tags: ["Python", "FastAPI", "Gemini AI", "Streamlit"],
    codeLink: "https://github.com/sushrutha777/Stock_Movement_Reason_Finder",
    liveLink: "https://stock-movement-reason-finder.streamlit.app/",
    image: "/stock-movement.png",
  },
  {
    id: "invoice",
    title: "Multi-Language Invoice Q&A System",
    points: [
      "Converts invoices (PDF/images) into PNG bytes for direct Gemini analysis without OCR.",
      "Uses Gemini 2.5 Flash to answer user questions in English and all Gemini supported languages.",
      "Extracts key information from uploaded invoice documents (PDF/images) efficiently."
    ],
    tags: ["Python", "Gemini 2.5 Flash", "Streamlit"],
    codeLink: "https://github.com/sushrutha777/Multi-Language-Invoice-Extractor",
    liveLink: "https://multi-language-invoice-extractor-by-sushrutha-s-kottary.streamlit.app/",
    image: "/invoice-extractor.png",
  },
  {
    id: "sentiment",
    title: "End-to-End Movie Review Sentiment Analysis With MLOps",
    points: [
      "Fine-tuned a DistilBERT model on the IMDB dataset, achieving 92% test accuracy for sentiment classification.",
      "Built a FastAPI-powered inference API and Streamlit UI for real-time movie review sentiment prediction.",
      "Implemented Docker, PyTest, and GitHub Actions CI/CD for automated testing and deployment."
    ],
    tags: ["Python", "PyTorch", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    codeLink: "https://github.com/sushrutha777/Movie-Review-Sentiment-Analysis-With-MLOps",
    liveLink: "https://movie-review-sentiment-analysis-with-mlops-by-sushrutha.streamlit.app/",
    image: "/sentiment-analysis.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            Projects
          </h2>
          <div className="w-12 h-1 bg-sky-400 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 group hover:border-sky-400/30 transition-all duration-500"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium text-white"
                    >
                      <Github size={14} /> Github
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium text-white"
                    >
                      <Globe size={14} /> Live
                    </a>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                      <span className="text-slate-500 mt-0.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
