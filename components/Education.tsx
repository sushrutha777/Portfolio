
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      school: "RNS Institute of Technology",
      degree: "Bachelor of Engineering | CSE(Data Science)",
      period: "2023 — 2027",
      grade: "GPA : 9.0",
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

  return (
    <section id="education" className="scroll-mt-24 py-10 md:py-16">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-display font-extrabold text-brand-teal">Education Path</h3>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-slate-200 dark:border-white/5 hover:border-brand-teal/20 transition-all flex flex-col md:flex-row gap-6 items-start"
          >

            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-2 mb-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">{edu.school}</h4>
                  <p className="text-brand-blue font-semibold text-sm md:text-base">{edu.degree}</p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-widest block mb-1">{edu.period}</span>
                  <span className="text-slate-500 text-xs font-medium block">{edu.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                  {edu.grade}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
