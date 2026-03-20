'use client';

import React from 'react';

const Footer: React.FC = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
            <button
                onClick={scrollToTop}
                className="mx-auto mb-6 flex flex-col items-center gap-1.5 text-slate-500 hover:text-violet-400 transition group clickable"
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <span className="text-xs">Back to top</span>
            </button>
            <p>Designed &amp; Built by Harshit Laxkar</p>
            <div className="space-x-4 mt-2">
                <a href="https://github.com/hlaxkar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition">GitHub</a>
                <span>·</span>
                <a href="https://linkedin.com/in/hlaxkar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
