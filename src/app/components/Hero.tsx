'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroTerminal from './HeroTerminal';

const roles = [
    'Software Development Engineer',
    'Distributed Systems & Backend',
    'Full Stack Developer',
    'Cloud-Native & Streaming',
];

const stats = [
    { num: '3+', label: 'Years Experience' },
    { num: '3,000+', label: 'Live Devices Streamed' },
    { num: '600+', label: 'REST APIs Optimized' },
];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        } else {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/*
                 * Left: Text — uses CSS animations (not Framer Motion)
                 * CSS animations run before JS hydration, fixing the LCP issue
                 * where Framer Motion initial="hidden" (opacity:0) was delaying
                 * the LCP element until React hydrated (~5.3s → <0.5s)
                 */}
                <div className="max-w-xl">
                    <p
                        className="text-lg font-medium mb-2 animate-fade-in-up"
                        style={{ color: 'var(--accent)', animationDelay: '0ms' }}
                    >
                        Hi, my name is
                    </p>

                    <h1
                        className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up"
                        style={{ color: 'var(--text)', animationDelay: '80ms' }}
                    >
                        Harshit Laxkar
                    </h1>

                    {/* Typewriter */}
                    <h2
                        className="text-2xl md:text-4xl font-extrabold mb-6 min-h-[1.4em] animate-fade-in-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        <span className="gradient-text">{displayed}</span>
                        <span className="animate-pulse ml-0.5" style={{ color: 'var(--accent)' }}>|</span>
                    </h2>

                    <p
                        className="text-lg max-w-xl mb-8 animate-fade-in-up"
                        style={{ color: 'var(--text-secondary)', animationDelay: '240ms' }}
                    >
                        Software Development Engineer with nearly 3 years of experience building high-throughput microservices, distributed telemetry pipelines, and cloud-native systems. Hands-on expertise in event-driven architectures with Apache Kafka, OpenTelemetry observability, and full-stack performance optimization.
                    </p>

                    {/* Stat strip */}
                    <div
                        className="flex gap-8 mb-10 animate-fade-in-up"
                        style={{ animationDelay: '300ms' }}
                    >
                        {stats.map(({ num, label }) => (
                            <div key={label} className="text-center">
                                <p className="text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>{num}</p>
                                <p className="text-xs mt-0.5 whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{label}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex flex-wrap gap-4 animate-fade-in-up"
                        style={{ animationDelay: '360ms' }}
                    >
                        <motion.a
                            href="/Harshit_Laxkar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold px-6 py-3 rounded-xl flex items-center space-x-2 shadow-sm"
                            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span>Resume</span>
                        </motion.a>
                        <motion.a
                            href="https://github.com/hlaxkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold px-6 py-3 rounded-xl flex items-center space-x-2 border"
                            style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'var(--bg-card)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span>GitHub</span>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/hlaxkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold px-6 py-3 rounded-xl border"
                            style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'var(--bg-card)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span>LinkedIn</span>
                        </motion.a>
                    </div>
                </div>

                {/* Right: Live Telemetry & Systems Terminal Visualizer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
                    className="flex justify-center items-center w-full"
                >
                    <HeroTerminal />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
