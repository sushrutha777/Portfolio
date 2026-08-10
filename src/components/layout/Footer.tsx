import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] py-12 relative overflow-hidden mt-12">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-2xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-wider">
            Sushrutha S Kottary
          </span>
          <p className="text-slate-500 text-sm font-light">
            © {currentYear} Sushrutha S Kottary. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sushrutha777"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 transition-all duration-300 shadow-sm"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sushruthaskottary777@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/30 transition-all duration-300 shadow-sm"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
