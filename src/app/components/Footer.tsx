'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="py-8 text-center text-sm" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}>
            <motion.button
                onClick={scrollToTop}
                className="mx-auto mb-6 flex flex-col items-center gap-1.5 transition clickable"
                style={{ color: 'var(--text-muted)' }}
                whileHover={{ y: -2, color: 'var(--accent)' }}
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <span className="text-xs">Back to top</span>
            </motion.button>
            <p>Designed &amp; Built by Harshit Laxkar</p>
            <div className="space-x-4 mt-2">
                <a
                    href="https://github.com/hlaxkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                    GitHub
                </a>
                <span>·</span>
                <a
                    href="https://linkedin.com/in/hlaxkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
