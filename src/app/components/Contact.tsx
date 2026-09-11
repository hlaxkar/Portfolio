'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <motion.section
            id="contact"
            className="py-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">05.</span> Get In Touch
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-base" style={{ color: 'var(--text-secondary)' }}>
                I&apos;m currently open to new software development engineering opportunities, distributed systems challenges, and technical collaborations. Feel free to reach out directly!
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto gap-4 mb-10 text-left">
                <a
                    href="mailto:hlaxkar@gmail.com"
                    className="card p-4 rounded-xl flex items-center gap-3 transition hover:scale-[1.02]"
                >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Email</p>
                        <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>hlaxkar@gmail.com</p>
                    </div>
                </a>

                <div className="card p-4 rounded-xl flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Location</p>
                        <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>Pune / Bangalore, India</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                    href="mailto:hlaxkar@gmail.com"
                    className="font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-md"
                    style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Say Hello
                </motion.a>

                <motion.a
                    href="/Harshit_Laxkar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold px-8 py-4 rounded-xl border transition duration-300"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'var(--bg-card)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Download Resume (PDF)
                </motion.a>
            </div>
        </motion.section>
    );
};

export default Contact;
