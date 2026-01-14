
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="glass rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-cyan/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-purple/10 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-cyan tracking-[0.3em] uppercase mb-4">Contact</h2>
            <h3 className="text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-8">Ready for the <br /> <span className="gradient-text">Next Model?</span></h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md">
              Currently open to roles in Generative AI, Data Engineering, and ML Systems. Let's discuss how I can bring autonomous logic to your data.
            </p>

            <div className="space-y-6">
              <ContactLink icon="📧" label="Primary Email" value="sushruthaskottary777@gmail.com" />
              <ContactLink icon="🔗" label="LinkedIn" value="Sushrutha S Kottary" />
              <ContactLink icon="📍" label="Location" value="Bengaluru, India" />
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-[2rem] border-slate-200 dark:border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Name</label>
                  <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-cyan outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Company</label>
                  <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-cyan outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Message</label>
                <textarea rows={4} className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-cyan outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-cyan dark:bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl">{icon}</div>
    <div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</div>
      <div className="text-slate-900 dark:text-slate-200 font-bold">{value}</div>
    </div>
  </div>
);

export default Contact;
