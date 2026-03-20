'use client';

import React, { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'Backend Engineer'];

const stats = [
    { num: '3+', label: 'Years Experience' },
    { num: '6+', label: 'Projects Built' },
    { num: '3',  label: 'Companies' },
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
        <section id="home" className="min-h-screen flex flex-col justify-center items-start">
            <div className="max-w-3xl">
                <p className="text-violet-400 text-lg font-medium mb-2 animate-fade-in-up" style={{ animationDelay: '0ms' }}>Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Harshit Laxkar</h1>

                {/* Typewriter */}
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in-up min-h-[1.2em]" style={{ animationDelay: '200ms' }}>
                    <span className="text-slate-400">{displayed}</span>
                    <span className="text-violet-400 animate-pulse ml-0.5">|</span>
                </h2>

                <p className="text-slate-400 text-lg max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    I&apos;m a passionate Full Stack Developer with a knack for creating dynamic, scalable web applications. With expertise in the MEAN stack and a focus on clean code and performance, I turn complex problems into elegant digital solutions.
                </p>

                {/* Stat strip */}
                <div className="flex gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                    {stats.map(({ num, label }) => (
                        <div key={label} className="text-center">
                            <p className="text-2xl font-extrabold text-violet-400">{num}</p>
                            <p className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <a href="https://github.com/hlaxkar" target="_blank" rel="noopener noreferrer" className="bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-violet-600 transition duration-300 transform hover:scale-105 flex items-center space-x-2">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span>View GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/hlaxkar" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105">
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
