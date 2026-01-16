import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError('');

    if (!formData.name || !formData.phone || !formData.company || !formData.location || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.phone.length !== 10) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', company: '', location: '', message: '' });

      // Reset message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: val });
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-20">
      <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-blue/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          <div>
            <h2 className="text-4xl font-display font-extrabold text-brand-teal mb-8">CONTACT ME</h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md">
              Actively seeking roles in Data Science, ML, and Generative AI, with a strong interest in building intelligent, data driven solutions.
            </p>

            <div className="flex flex-col gap-8">
              <ContactLink icon="📧" label="Primary Email" value="sushruthaskottary777@gmail.com" href="https://mail.google.com/mail/?view=cm&fs=1&to=sushruthaskottary777@gmail.com" />
              <ContactLink icon="🔗" label="LinkedIn" value="Sushrutha S Kottary" href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/" />
              <ContactLink icon="💻" label="GitHub" value="sushrutha777" href="https://github.com/sushrutha777" />
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-[2rem] border-slate-200 dark:border-white/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Company</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Location</label>
                <input
                  type="text"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-teal outline-none transition-all resize-none"
                ></textarea>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs font-bold uppercase tracking-widest"
                  >
                    {error}
                  </motion.div>
                )}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-500 text-xs font-bold uppercase tracking-widest"
                  >
                    your request has been sent
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-teal dark:bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) => {
  const content = (
    <div className={`flex items-center gap-4 ${href ? 'group cursor-pointer' : ''}`}>
      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl group-hover:bg-brand-teal/10 transition-colors shrink-0">{icon}</div>
      <div>
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</div>
        <div className={`text-slate-900 dark:text-slate-200 font-bold ${href ? 'group-hover:text-brand-teal transition-colors' : ''}`}>{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block w-fit relative z-20" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  ) : content;
};

export default Contact;
