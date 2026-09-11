'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Job {
    title: string;
    company: string;
    location: string;
    period: string;
    bullets: { heading: string; text: string }[];
    tags: string[];
}

const jobs: Job[] = [
    {
        title: 'Software Development Engineer - Video Telematics & Streaming',
        company: 'Intangles',
        location: 'Pune, India',
        period: 'November 2025 – Present',
        bullets: [
            {
                heading: 'Distributed Event & Telemetry Pipeline',
                text: 'Architected an extensible, vendor-agnostic microservice ingestion framework that validates, deduplicates, persists, and streams high-frequency external webhook telemetry to Apache Kafka at ~500 events/min; enabled zero-downtime onboarding of external data feeds via configuration.',
            },
            {
                heading: 'Fault-Tolerant Streaming Pipeline',
                text: 'Designed a publish-first, persist-async event processing architecture with Kafka as the durability boundary and automated event replay for fault isolation; integrated OpenTelemetry distributed tracing and metrics across microservices to optimize latency and ensure operational resilience.',
            },
            {
                heading: 'Real-Time Device & Signal Monitoring Platform',
                text: 'Owned end-to-end development of a full-stack platform (React/Angular, Node.js) processing real-time telemetry streams from 3,000+ network-connected cameras across 17 signal types; built multi-region concurrent processing (25–50 streams/sec) with automated anomaly detection and ticketing.',
            },
            {
                heading: 'AI-Assisted Workflow & Reliability',
                text: 'Accelerated component refactoring, test suite coverage (unit and integration tests), and technical documentation utilizing AI-assisted developer tooling (Cursor, GitHub Copilot) under agile pair programming practices.',
            },
        ],
        tags: ['Apache Kafka', 'OpenTelemetry', 'Microservices', 'Node.js', 'Fastify', 'React', 'Redis', 'Docker'],
    },
    {
        title: 'Associate Consultant - Full Stack Developer',
        company: 'Oodles Technologies',
        location: 'Gurugram, India',
        period: 'June 2024 – November 2025',
        bullets: [
            {
                heading: 'Enterprise Backend & API Re-architecture',
                text: 'Led the backend migration and modernization of an enterprise CRM from legacy PHP to high-throughput Node.js microservices with MySQL; redesigned database schemas and optimized 600+ REST APIs, cutting p99 response times from 15–25s down to 200ms using Redis caching and parallel query execution.',
            },
            {
                heading: 'Intelligent Analytics & Python Services',
                text: 'Engineered a data-driven recommendation engine using Python and K-Nearest Neighbors (KNN) algorithms, optimizing memory footprint and execution latency for real-time multidimensional data analysis.',
            },
            {
                heading: 'Service Integration & Engineering Best Practices',
                text: 'Developed modular REST microservices and plugin architectures integrating external AI and cloud APIs (OpenAI, AWS); conducted rigorous code reviews, enforced architectural design patterns, and maintained comprehensive API documentation.',
            },
        ],
        tags: ['Node.js', 'MySQL', 'Redis', 'Python', 'KNN', 'OpenAI API', 'AWS', 'React'],
    },
    {
        title: 'Full Stack Developer',
        company: 'Genefitletics',
        location: 'Remote',
        period: 'July 2023 – February 2024',
        bullets: [
            {
                heading: 'Analytical Data Processing',
                text: 'Formulated algorithmic models in Python and PHP to process, normalize, and evaluate large-scale multi-variant biological and phenotypic datasets with high computational precision.',
            },
            {
                heading: 'Angular Enterprise Web Applications',
                text: 'Engineered client-facing Single Page Applications (SPAs) in Angular backed by modular RESTful APIs and relational MySQL databases, implementing responsive dashboards, state management, and role-based access control (RBAC).',
            },
        ],
        tags: ['Angular', 'Python', 'PHP', 'MySQL', 'REST APIs', 'RBAC'],
    },
];

const Experience: React.FC = () => {
    return (
        <motion.section
            id="experience"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-12 flex items-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">02.</span> Where I&apos;ve Worked
            </h2>
            <div className="relative ml-4" style={{ borderLeft: '2px solid var(--border)' }}>
                {jobs.map((job, index) => (
                    <motion.div
                        key={job.company}
                        className="mb-12 pl-12 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 80, damping: 20 }}
                    >
                        <div
                            className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4"
                            style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--bg)' }}
                        />
                        <div className="card p-6 rounded-xl">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{job.title}</h3>
                                <span className="text-xs font-medium px-2.5 py-1 rounded-md self-start sm:self-auto" style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-muted)' }}>
                                    {job.location}
                                </span>
                            </div>
                            <p className="font-semibold mb-1" style={{ color: 'var(--accent)' }}>{job.company}</p>
                            <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-muted)' }}>{job.period}</p>
                            <ul className="space-y-2.5 mb-5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                {job.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="mt-1 flex-shrink-0 text-xs" style={{ color: 'var(--accent)' }}>▸</span>
                                        <span>
                                            <strong style={{ color: 'var(--text)' }}>{bullet.heading}:</strong> {bullet.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                                        style={{
                                            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                                            color: 'var(--accent)',
                                            border: '1px solid rgba(var(--accent-rgb), 0.2)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
