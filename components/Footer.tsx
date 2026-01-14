
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-2xl font-display font-black tracking-tighter text-slate-900 dark:text-white mb-2">S.KOTTARY</div>
          <p className="text-slate-500 text-sm font-medium italic">"Building the foundation for agentic intelligence."</p>
        </div>
        
        <div className="flex gap-10">
          <a href="#" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-brand-cyan transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-brand-cyan transition-colors">GitHub</a>
          <a href="#" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-brand-cyan transition-colors">Resume</a>
        </div>

        <div className="text-slate-400 text-xs font-medium">
          © 2025 Sushrutha S Kottary. <span className="hidden sm:inline">Crafted in Bengaluru.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
