import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#090909] py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold font-display text-white tracking-widest">
            Sushrutha S Kottary
          </span>
          <p className="text-slate-500 text-sm">
            © {currentYear} Sushrutha S Kottary. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sushrutha777"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-brand-purple transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-brand-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sushruthaskottary777@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-brand-teal transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
