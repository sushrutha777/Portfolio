"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Freelance",
    type: "Freelance",
    date: "Jan 2026 — Present",
    bullets: [
      <>Developed a production-ready fish delivery web application for a local fish business <a href="https://macchikart.in" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white font-semibold transition-colors underline decoration-indigo-400/30 underline-offset-2">MacchiKart.in</a> with Firebase and Google Antigravity, featuring guest checkout, cash-on-delivery, order tracking, and an admin portal.</>,
      <>Developed and deployed a portfolio website for an educational Institution <a href="https://www.baschoolandcollege.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white font-semibold transition-colors underline decoration-indigo-400/30 underline-offset-2 whitespace-nowrap">BA School & College</a> and <a href="https://www.baitithumbay.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white font-semibold transition-colors underline decoration-indigo-400/30 underline-offset-2 whitespace-nowrap">BA ITI</a>.</>,
      <>Contributed to the development of the PDF utility web app <a href="https://trymypdf.web.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white font-semibold transition-colors underline decoration-indigo-400/30 underline-offset-2">TryMyPDF</a> as part of the development team.</>,
      "Implemented SEO techniques using Google Search Console to improve website indexing and search visibility."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#090909] border-2 border-indigo-400 flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-indigo-400" />
              </div>

              <div className="glass p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-indigo-400/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-5 md:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm md:text-base">
                      <Briefcase size={16} className="shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400">
                      {exp.date}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 md:gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="text-slate-500 mt-1 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
