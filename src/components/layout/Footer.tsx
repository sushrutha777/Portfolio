export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] py-12 relative overflow-hidden mt-12">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center relative z-10">
        <div className="text-slate-400 text-sm text-center flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1.5">
          <span>Designed and developed by <span className="font-semibold text-slate-200 tracking-wide">Sushrutha S Kottary</span></span>
          <span>© {currentYear}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
