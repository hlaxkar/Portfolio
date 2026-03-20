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
        title: "Deal Maker System Migration",
        description: "Complete backend migration of a legacy CRM from Laravel/PostgreSQL to a modern Node.js/MySQL stack. Redesigned the API architecture and query layer to support high-traffic enterprise workloads, resulting in a dramatic performance improvement.",
        tags: ["Node.js", "Express", "MySQL", "React", "Redis"],
        role: "Backend",
        impact: "25s → 200ms API response",
        featured: true,
    },
    {
        title: "Proteba — Health Report Dashboard",
        description: "Full-stack health analytics platform for customers to visualize biological scores, receive AI-powered nutrition recommendations, and build personalized diet charts generated from lab data.",
        tags: ["Angular", "PHP", "MySQL", "Data Visualisation"],
        role: "Full Stack",
        impact: "Patient-facing clinical platform",
        featured: true,
    },
    {
        title: "ScreenDuck Movie Tracker",
        description: "A movie review and tracking website built from scratch using the TMDB API, featuring user lists and bookmarks.",
        tags: ["PHP", "MySQL", "HTML/CSS", "REST API"],
        role: "Full Stack",
    },
    {
        title: "Phenotype Assessment App",
        description: "An application to collect phenotype information from patients through a series of structured questions.",
        tags: ["Angular", "PHP", "MySQL", "Tailwind CSS"],
        role: "Full Stack",
    },
    {
        title: "Disease Prediction Models",
        description: "Robust and scalable ML algorithms to predict various diseases using phenotype and microbial data.",
        tags: ["Python", "PHP", "MySQL"],
        role: "ML",
    },
    {
        title: "Gift-Scout Chatbot",
        description: "A chatbot WordPress plugin that recommends gift products to customers using AI and Amazon product APIs.",
        tags: ["PHP", "React", "OpenAI API", "Amazon API"],
        role: "Full Stack",
    },
];

const roleBadgeStyle: Record<string, { bg: string; text: string; border: string }> = {
    "Backend":    { bg: 'rgba(59, 130, 246, 0.1)',  text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
    "Full Stack": { bg: 'rgba(var(--accent-rgb), 0.1)', text: 'var(--accent)', border: 'rgba(var(--accent-rgb), 0.3)' },
    "ML":         { bg: 'rgba(16, 185, 129, 0.1)',  text: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
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
