"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    school: "RNS Institute of Technology",
    degree: "Bachelor of Engineering | CSE(Data Science)",
    period: "2023 — 2027",
    grade: "GPA : 9.03",
    location: "Bengaluru, India"
  },
  {
    school: "Expert PU College",
    degree: "PCMB",
    period: "2021 — 2023",
    grade: "Grade : 90.5 %",
    location: "Mangaluru, India"
  },
  {
    school: "Shri Rama Vidya Kendra",
    degree: "High School",
    period: "2018 — 2021",
    grade: "Grade : 97.6 %",
    location: "Kalladka, India"
  }
];

export default function Education() {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-emerald-400 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-emerald-400/20 transition-all group flex flex-col md:flex-row gap-6 md:items-center justify-between"
            >
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                  <p className="text-emerald-400 font-medium text-sm md:text-base mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:gap-4 ml-16 md:ml-0 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                <span className="text-slate-400 font-bold tracking-wider text-xs md:text-sm uppercase">
                  {edu.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
