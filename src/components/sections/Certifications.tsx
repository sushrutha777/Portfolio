"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "IBM RAG & Agentic AI Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/5QFWX5VUMM44"
  },
  {
    title: "Ultimate RAG Bootcamp (LangChain, LangGraph)",
    link: "https://www.udemy.com/certificate/UC-974d72b0-9155-4753-bad4-432a1184367f/"
  },
  {
    title: "Generative AI With Large Language Models",
    link: "https://www.coursera.org/account/accomplishments/verify/AUIFTY6AQWZ4"
  },
  {
    title: "DeepLearning.AI TensorFlow Developer",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/Y404OIWGQQUY"
  },
  {
    title: "IBM Data Science Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/5EFGQX62ASXS"
  },
  {
    title: "Complete Data Science, ML, NLP Bootcamp",
    link: "https://www.udemy.com/certificate/UC-c5335c09-c6ff-44e3-acb4-26f80c23610a/"
  }
];

export default function Certifications() {
  return (
    <section className="py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-teal-400 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-3xl border border-white/5 hover:border-teal-400/30 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-400/20 transition-all">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-200 leading-snug group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-teal-400 transition-colors">
                Verify Credential
                <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
