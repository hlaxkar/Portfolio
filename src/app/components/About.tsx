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
                        Hello! I&apos;m Harshit, a <strong style={{ color: 'var(--text)' }}>Software Development Engineer</strong> with nearly 3 years of experience building high-throughput microservices, distributed pipelines, and real-time telemetry monitoring systems.
                    </p>
                    <p>
                        Currently at <strong style={{ color: 'var(--text)' }}>Intangles</strong>, I architect event-driven ingestion frameworks streaming high-frequency telemetry into Apache Kafka, design fault-tolerant streaming pipelines with automated replay, and implement end-to-end OpenTelemetry distributed observability.
                    </p>
                    <p>
                        Prior to Intangles, at <strong style={{ color: 'var(--text)' }}>Oodles Technologies</strong> and <strong style={{ color: 'var(--text)' }}>Genefitletics</strong>, I led large-scale CRM modernizations (slashing p99 response times from 25s down to 200ms), engineered recommendation algorithms in Python, and built responsive enterprise Single Page Applications.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                        <span
                            className="text-xs font-mono px-3 py-1.5 rounded-lg"
                            style={{
                                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                                color: 'var(--accent)',
                                border: '1px solid rgba(var(--accent-rgb), 0.25)',
                            }}
                        >
                            📍 Pune / Bangalore, India
                        </span>
                        <span
                            className="text-xs font-mono px-3 py-1.5 rounded-lg"
                            style={{
                                backgroundColor: 'var(--bg-muted)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            ⚡ Unix / Linux & Cloud-Native
                        </span>
                        <span
                            className="text-xs font-mono px-3 py-1.5 rounded-lg"
                            style={{
                                backgroundColor: 'var(--bg-muted)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            🤖 AI-Assisted Engineering (Cursor / Copilot)
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="md:col-span-2 flex flex-col justify-center gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
                >
                    <div
                        className="p-5 rounded-2xl"
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--card-shadow)',
                        }}
                    >
                        <div className="text-xs uppercase font-bold tracking-wider mb-3" style={{ color: 'var(--accent)' }}>
                            Core Specializations
                        </div>
                        <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <li className="flex items-start gap-2">
                                <span style={{ color: 'var(--accent)' }}>▹</span>
                                <span><strong>Distributed Telemetry:</strong> Apache Kafka, Stream Ingestion, Pub/Sub</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: 'var(--accent)' }}>▹</span>
                                <span><strong>Microservices:</strong> Fastify, Node.js, Express.js, REST APIs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: 'var(--accent)' }}>▹</span>
                                <span><strong>Observability:</strong> OpenTelemetry (Tracing, Metrics, SLA Monitoring)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: 'var(--accent)' }}>▹</span>
                                <span><strong>Full Stack:</strong> React, Angular, TypeScript, Tailwind CSS</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
