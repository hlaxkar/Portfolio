'use client';

import React, { useState } from 'react';
import ScrollAnimator from './ScrollAnimator';

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

const roleBadgeColor: Record<string, string> = {
    "Backend":    "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Full Stack": "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "ML":         "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

const Projects: React.FC = () => {
    const featured = projectsData.filter(p => p.featured);
    const rest = projectsData.filter(p => !p.featured);
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <ScrollAnimator>
            <section id="projects" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">03.</span> Things I&apos;ve Built
                </h2>

                {/* Featured projects */}
                <div className="space-y-6 mb-12">
                    {featured.map((project) => (
                        <div key={project.title} className="glass-effect rounded-xl p-6 md:p-8 border border-white/10 hover:border-violet-400/60 transition duration-300">
                            <div className="flex flex-col md:flex-row md:gap-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-violet-500/10 text-violet-300 border-violet-500/30">Featured</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${roleBadgeColor[project.role] ?? ''}`}>{project.role}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{project.description}</p>
                                </div>
                                <div className="mt-6 md:mt-0 md:w-52 flex flex-col gap-4 shrink-0">
                                    {project.impact && (
                                        <div className="rounded-lg px-4 py-3 bg-violet-500/10 border border-violet-400/20">
                                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Impact</p>
                                            <p className="text-sm font-semibold text-violet-300">{project.impact}</p>
                                        </div>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/10">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other projects */}
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-6 font-medium">Other Noteworthy Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((project) => {
                        const isExpanded = expanded === project.title;
                        return (
                            <div key={project.title} className="glass-effect rounded-xl p-5 flex flex-col border border-white/10 hover:border-violet-400/60 transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${roleBadgeColor[project.role] ?? ''}`}>{project.role}</span>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                                <p className={`text-slate-400 text-sm mb-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>{project.description}</p>
                                <button
                                    onClick={() => setExpanded(isExpanded ? null : project.title)}
                                    className="text-xs text-violet-400 hover:text-violet-300 mb-4 text-left transition clickable"
                                >
                                    {isExpanded ? '— Show less' : '+ Read more'}
                                </button>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-white/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Projects;
