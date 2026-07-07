"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.location || !formData.message) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (formData.phone.length !== 10) {
      setErrorMsg("Phone number must be exactly 10 digits.");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xwvldvek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", location: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMsg(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMsg("Something went wrong. Please try again later.");
        }
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again later.");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: val });
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                  Let's Talk
                </h2>
                <div className="w-12 h-1 bg-brand-purple rounded-full mb-8"></div>
                <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                  Actively seeking roles in Data Science, ML, and Generative AI, with a strong interest in building intelligent, data driven solutions.
                </p>

                <div className="space-y-6">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sushruthaskottary777@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:bg-brand-purple/20 group-hover:text-brand-purple transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-white font-medium">sushruthaskottary777@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/sushrutha-s-kottary-994310291/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">LinkedIn</div>
                      <div className="text-white font-medium">Sushrutha S Kottary</div>
                    </div>
                  </a>
                  <a href="https://github.com/sushrutha777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Github size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">GitHub</div>
                      <div className="text-white font-medium">sushrutha777</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-[2rem] border border-white/5 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="10-digit number"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    placeholder="Your Location"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#090909]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-400 text-sm font-medium">
                      {errorMsg}
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-emerald-400 text-sm font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-[#090909] font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
