'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    tags: string[];
    role: string;
    impact?: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "Distributed Telemetry & Kafka Streaming Pipeline",
        description: "Architected an extensible, vendor-agnostic microservice ingestion framework streaming high-frequency external webhook telemetry to Apache Kafka at ~500 events/min with zero-downtime onboarding. Designed a publish-first, persist-async architecture with automated event replay and OpenTelemetry distributed tracing.",
        tags: ["Apache Kafka", "OpenTelemetry", "Fastify", "Node.js", "Docker", "Event Replay"],
        role: "Distributed Systems",
        impact: "~500 events/min · Zero-downtime feed onboarding",
        featured: true,
    },
    {
        title: "Real-Time Video Telematics & Device Platform",
        description: "Owned end-to-end development of a full-stack platform processing real-time telemetry streams from 3,000+ network-connected cameras across 17 signal types. Engineered multi-region concurrent processing with automated anomaly detection and ticketing.",
        tags: ["React", "Node.js", "WebSockets", "OpenTelemetry", "Redis"],
        role: "Real-Time / Streaming",
        impact: "3,000+ cameras · 25–50 streams/sec",
        featured: true,
    },
    {
        title: "Enterprise CRM Backend Modernization",
        description: "Led the migration and re-architecture of an enterprise CRM from legacy PHP to high-throughput Node.js microservices with MySQL. Redesigned schemas and optimized 600+ REST APIs using Redis caching and parallel query execution.",
        tags: ["Node.js", "MySQL", "Redis", "REST APIs", "Microservices"],
        role: "Backend",
        impact: "600+ APIs · p99 cut from 25s → 200ms",
    },
    {
        title: "Intelligent Recommendation & ML Engine",
        description: "Engineered a data-driven recommendation engine using Python and K-Nearest Neighbors (KNN) algorithms, optimizing memory footprint and execution latency for real-time multidimensional data analysis.",
        tags: ["Python", "KNN", "Pandas", "Scikit-Learn", "REST APIs"],
        role: "ML / Analytics",
        impact: "Real-time multidimensional scoring",
    },
    {
        title: "Proteba — Clinical Biomarker Dashboard",
        description: "Engineered client-facing Single Page Applications (SPAs) in Angular backed by modular RESTful APIs and relational MySQL databases, implementing responsive dashboards, state management, and role-based access control (RBAC).",
        tags: ["Angular", "Python", "MySQL", "RBAC", "REST APIs"],
        role: "Full Stack",
        impact: "Patient & doctor clinical SPA",
    },
    {
        title: "AI Agent & Cloud Commerce Plugin",
        description: "Developed modular REST microservices and plugin architectures integrating external AI and cloud APIs (OpenAI, AWS) with a React frontend to deliver conversational recommendation assistants.",
        tags: ["OpenAI API", "AWS", "React", "Node.js", "PHP"],
        role: "AI Integration",
        impact: "Conversational AI product discovery",
    },
];

const roleBadgeStyle: Record<string, { bg: string; text: string; border: string }> = {
    "Distributed Systems":   { bg: 'rgba(139, 92, 246, 0.12)', text: '#8b5cf6', border: 'rgba(139, 92, 246, 0.3)' },
    "Real-Time / Streaming": { bg: 'rgba(236, 72, 153, 0.12)', text: '#ec4899', border: 'rgba(236, 72, 153, 0.3)' },
    "Backend":               { bg: 'rgba(59, 130, 246, 0.12)',  text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
    "Full Stack":            { bg: 'rgba(var(--accent-rgb), 0.12)', text: 'var(--accent)', border: 'rgba(var(--accent-rgb), 0.3)' },
    "ML / Analytics":        { bg: 'rgba(16, 185, 129, 0.12)',  text: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
    "AI Integration":        { bg: 'rgba(245, 158, 11, 0.12)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' },
};

const Projects: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <motion.section
            id="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-12 flex items-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">03.</span> Things I&apos;ve Built
            </h2>

            {/* Bento Grid */}
            <div className="bento-grid">
                {projectsData.map((project, index) => {
                    const isFeatured = project.featured;
                    const isExpanded = expanded === project.title;
                    const badge = roleBadgeStyle[project.role] ?? roleBadgeStyle["Full Stack"];

                    return (
                        <motion.div
                            key={project.title}
                            className={`card p-6 flex flex-col ${isFeatured ? 'bento-featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, type: 'spring', stiffness: 80, damping: 20 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                                {isFeatured && (
                                    <span
                                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                        style={{
                                            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                                            color: 'var(--accent)',
                                            border: '1px solid rgba(var(--accent-rgb), 0.3)',
                                        }}
                                    >
                                        Featured
                                    </span>
                                )}
                                <span
                                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                    style={{
                                        backgroundColor: badge.bg,
                                        color: badge.text,
                                        border: `1px solid ${badge.border}`,
                                    }}
                                >
                                    {project.role}
                                </span>
                            </div>

                            <h3
                                className={`font-bold mb-3 ${isFeatured ? 'text-xl md:text-2xl' : 'text-base'}`}
                                style={{ color: 'var(--text)' }}
                            >
                                {project.title}
                            </h3>

                            <p
                                className={`leading-relaxed mb-3 ${isFeatured ? 'text-base' : 'text-sm'} ${!isFeatured && !isExpanded ? 'line-clamp-2' : ''}`}
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {project.description}
                            </p>

                            {!isFeatured && (
                                <button
                                    onClick={() => setExpanded(isExpanded ? null : project.title)}
                                    className="text-xs mb-3 text-left transition clickable"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    {isExpanded ? '— Show less' : '+ Read more'}
                                </button>
                            )}

                            {project.impact && (
                                <div
                                    className="rounded-lg px-4 py-3 mb-4"
                                    style={{
                                        backgroundColor: 'rgba(var(--accent-rgb), 0.06)',
                                        border: '1px solid rgba(var(--accent-rgb), 0.15)',
                                    }}
                                >
                                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Impact</p>
                                    <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{project.impact}</p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-2 py-0.5 rounded-md"
                                        style={{
                                            backgroundColor: 'var(--bg-muted)',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Projects;
