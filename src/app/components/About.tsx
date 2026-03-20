'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.section
            id="about"
            className="py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
            <h2 className="text-4xl font-bold mb-8 flex items-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">01.</span> About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                <motion.div
                    className="md:col-span-3 text-lg space-y-4"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 80, damping: 20 }}
                >
                    <p>
                        Hello! I&apos;m Harshit, a developer driven by a passion for building innovative and efficient web applications. My journey into the world of programming started with a fascination for how technology can solve real-world problems. Today, I specialize in the full stack, from crafting intuitive user interfaces with Angular and React to engineering robust backend systems with Node.js.
                    </p>
                    <p>
                        My experience has equipped me with a strong command over JavaScript, TypeScript, and various frameworks. I thrive on challenges, whether it&apos;s migrating a legacy CRM and slashing response times from 25 seconds to 200 milliseconds, or developing predictive models for healthcare. I&apos;m always eager to learn and apply new technologies to create seamless and impactful user experiences.
                    </p>
                </motion.div>
                <motion.div
                    className="md:col-span-2 flex justify-center items-center"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
                >
                    <div
                        className="w-64 h-64 rounded-3xl relative flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(var(--accent-rgb), 0.05))',
                            border: '1px solid var(--border)',
                        }}
                    >
                        <svg className="w-48 h-48" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
