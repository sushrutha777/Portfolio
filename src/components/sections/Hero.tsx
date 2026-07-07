"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[#090909]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tight leading-tight">
            Hello, I'm <br className="hidden md:block" /> Sushrutha S Kottary
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            I handcraft each line of code with the idea to solve problem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] border border-white/10 hover:bg-[#202020] hover:border-brand-purple/30 transition-all text-white font-medium text-sm md:text-base group"
            >
              Contact me here <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] border border-white/10 hover:bg-[#202020] hover:border-brand-purple/30 transition-all text-white font-medium text-sm md:text-base group"
            >
              Download CV <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 hover:bg-[#202020] hover:border-brand-purple/30 hover:text-brand-purple transition-all text-white flex items-center justify-center"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="https://github.com/sushrutha777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 hover:bg-[#202020] hover:border-brand-purple/30 hover:text-white transition-all text-white flex items-center justify-center"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
