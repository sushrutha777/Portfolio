"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

export default function Achievements() {
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
            Achievements
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-brand-purple/20 transition-all duration-500 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-[100px] rounded-full group-hover:bg-brand-purple/10 transition-colors duration-700" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Fish Delivery Web Application</h3>
                  <div className="flex gap-4">
                    <a href="https://macchikart.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-400 font-bold text-sm hover:text-white transition-colors">
                      Live Website <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    Developed a production-ready fish delivery web application for a local fish business with Firestore and Firebase Hosting, featuring guest checkout, cash-on-delivery, order tracking, and an admin portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-t border-white/5 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Educational Institution Portfolio</h3>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.baschoolandcollege.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-white transition-colors">
                      BA School & College <ExternalLink size={14} />
                    </a>
                    <a href="https://www.baitithumbay.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-white transition-colors">
                      BA ITI <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    Developed and deployed fully responsive portfolio websites for educational institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-t border-white/5 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">PDF Utility Web App (TryMyPDF)</h3>
                  <div className="flex gap-4">
                    <a href="https://trymypdf.web.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 font-bold text-sm hover:text-white transition-colors">
                      TryMyPDF <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    Contributed to the development of the PDF utility web app, implementing core browser-based PDF processing features and supporting web app deployment as part of the development team.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-t border-white/5 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">LeetCode Problem Solver</h3>
                  <div className="flex gap-4">
                    <a href="https://leetcode.com/u/Sushrutha_S_Kottary/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-400 font-bold text-sm hover:text-white transition-colors">
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    Solved 250+ LeetCode problems utilizing Python, SQL, and Pandas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
