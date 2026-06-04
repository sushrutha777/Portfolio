
import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (direction === 'left') {
        if (scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }
  };

  const certs = [
    {
      title: "IBM RAG & Agentic AI Professional Certificate",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/5QFWX5VUMM44"
    },
    {
      title: "Ultimate RAG Bootcamp (LangChain, LangGraph)",
      link: "https://www.udemy.com/certificate/UC-974d72b0-9155-4753-bad4-432a1184367f/"
    },
    {
      title: "Generative AI With Large Language Models",
      link: "https://www.coursera.org/account/accomplishments/verify/AUIFTY6AQWZ4"
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/Y404OIWGQQUY"
    },
    {
      title: "IBM Data Science Professional Certificate",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/5EFGQX62ASXS"
    },
    {
      title: "Complete Data Science, ML, NLP Bootcamp",
      link: "https://www.udemy.com/certificate/UC-c5335c09-c6ff-44e3-acb4-26f80c23610a/"
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-24 py-10 md:py-16">
      <div className="text-center md:text-left mb-12">
        <h2 className="text-4xl font-display font-extrabold text-brand-teal">Certificates</h2>
        <div className="md:hidden mt-4 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <button onClick={() => scroll('left')} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors active:scale-95" aria-label="Scroll left">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <span className="animate-pulse">Swipe</span>
          <button onClick={() => scroll('right')} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors active:scale-95" aria-label="Scroll right">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>

      <div ref={carouselRef} className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:snap-none">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="w-[85vw] sm:w-[400px] md:w-auto shrink-0 snap-center glass p-6 rounded-2xl border-slate-200 dark:border-white/5 flex flex-col justify-between group"
          >
            <div>
              <h4 className="text-slate-800 dark:text-slate-200 font-bold leading-snug">{cert.title}</h4>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-teal transition-colors"
            >
              Verify Credential
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
