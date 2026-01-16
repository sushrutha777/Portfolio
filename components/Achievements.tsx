import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="scroll-mt-24 py-10 md:py-16">
            <div className="mb-16">
                <h2 className="text-4xl font-display font-extrabold text-brand-teal">Achievements</h2>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group glass p-8 rounded-[2rem] border-slate-200 dark:border-white/5 hover:border-brand-teal/20 transition-all"
                >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Fish Delivery Web Application</h3>
                            <a
                                href="https://macchikart-98228.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-teal font-bold text-sm hover:underline"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                Live Website
                            </a>
                        </div>

                    </div>

                    <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <span className="mt-1.5">•</span>
                            <span>Developed a production ready fish delivery web application with seamless guest checkout and cash on delivery, eliminating user login friction.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1.5">•</span>
                            <span>Implemented a serverless, real time architecture using React and Firebase Firestore, with AI-assisted development via Google Antigravity to accelerate design and development.</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
