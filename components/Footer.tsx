
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-6 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-sm font-medium text-slate-500 mb-1">Built by</div>
          <div className="text-lg font-display font-bold tracking-tight text-slate-900 dark:text-white">Sushrutha S Kottary</div>
        </div>

        <div className="text-slate-400 text-xs font-medium flex flex-col items-center md:items-end">
          <p>© {new Date().getFullYear()} Sushrutha S Kottary.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
