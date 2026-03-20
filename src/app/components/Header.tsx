'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const navSections = ['about', 'experience', 'projects', 'skills', 'contact'];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="#home" className="text-2xl font-bold text-white">HL.</Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navSections.map(section => (
                            <Link key={section} href={`#${section}`} className="text-slate-300 hover:text-violet-400 transition">
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 clickable"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="w-6 h-0.5 bg-slate-300 rounded"></span>
                        <span className="w-6 h-0.5 bg-slate-300 rounded"></span>
                        <span className="w-4 h-0.5 bg-slate-300 rounded self-end"></span>
                    </button>
                </div>
            </header>

            {/* Backdrop — rendered outside <header> to avoid stacking context issues */}
            <div
                className={`fixed inset-0 z-[90] bg-black/60 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile drawer — sibling of <header>, not a child, so it gets its own stacking context */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-[100] md:hidden transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ backgroundColor: '#08080f' }}
            >
                <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                    <span className="text-xl font-bold text-white">HL.</span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-slate-400 hover:text-white transition clickable"
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
                            className="text-slate-300 hover:text-violet-400 transition text-lg font-medium clickable"
                        >
                            <span className="text-violet-400 text-sm mr-2">0{i + 1}.</span>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;
