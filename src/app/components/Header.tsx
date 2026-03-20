'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navSections = ['about', 'experience', 'projects', 'skills', 'contact'];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
                style={{ backgroundColor: 'var(--header-bg)', borderColor: 'var(--border)' }}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="#home" className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                        HL<span style={{ color: 'var(--accent)' }}>.</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navSections.map((section, i) => (
                            <Link
                                key={section}
                                href={`#${section}`}
                                className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
                                style={{ color: 'var(--text-secondary)' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                <span style={{ color: 'var(--accent)' }} className="text-xs mr-1">0{i + 1}.</span>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}

                        {/* Theme toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 clickable"
                                style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text)' }}
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {theme === 'dark' ? (
                                        <motion.svg
                                            key="sun"
                                            initial={{ rotate: -90, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            exit={{ rotate: 90, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="5" />
                                            <line x1="12" y1="1" x2="12" y2="3" />
                                            <line x1="12" y1="21" x2="12" y2="23" />
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                            <line x1="1" y1="12" x2="3" y2="12" />
                                            <line x1="21" y1="12" x2="23" y2="12" />
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg
                                            key="moon"
                                            initial={{ rotate: 90, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            exit={{ rotate: -90, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </button>
                        )}
                    </nav>

                    {/* Hamburger button */}
                    <div className="flex items-center gap-3 md:hidden">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="w-9 h-9 rounded-lg flex items-center justify-center clickable"
                                style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text)' }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                )}
                            </button>
                        )}
                        <button
                            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 clickable"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: 'var(--text-secondary)' }}></span>
                            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: 'var(--text-secondary)' }}></span>
                            <span className="w-4 h-0.5 rounded self-end" style={{ backgroundColor: 'var(--text-secondary)' }}></span>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] md:hidden"
                        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-[100] md:hidden transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ backgroundColor: 'var(--bg-card)', borderLeft: '1px solid var(--border)' }}
            >
                <div className="flex justify-between items-center px-6 py-5" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="text-xl font-bold" style={{ color: 'var(--text)' }}>HL<span style={{ color: 'var(--accent)' }}>.</span></span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="transition clickable"
                        style={{ color: 'var(--text-muted)' }}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col px-6 py-8 space-y-6">
                    {navSections.map((section, i) => (
                        <Link
                            key={section}
                            href={`#${section}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-medium transition clickable"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <span style={{ color: 'var(--accent)' }} className="text-sm mr-2">0{i + 1}.</span>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;
