'use client';

import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
    {
        title: 'Backend Developer',
        company: 'Intangles',
        period: 'November 2025 – Present',
        bullets: [
            'Developed and maintained scalable Node.js microservices for IoT and videomatics platforms.',
            'Processed real-time vehicle telemetry and camera data streams to detect driver behavior and road conditions.',
            'Enabled predictive analytics and alerting systems to support large-scale fleet operations.',
        ],
        tags: ['Node.js', 'Microservices', 'IoT', 'Redis', 'Telemetry'],
    },
    {
        title: 'Associate Consultant — Full Stack Developer',
        company: 'Oodles Technologies',
        period: 'June 2024 – November 2025',
        bullets: [
            'Led the backend migration of a legacy CRM from Laravel/PostgreSQL to Node.js/MySQL, improving API response time from ~25s to 200ms.',
            'Developed a personalized food recommendation engine using a K-Nearest Neighbors (KNN) model.',
            'Built a PHP chatbot plugin with a React frontend, integrating OpenAI and Amazon APIs.',
        ],
        tags: ['Node.js', 'MySQL', 'React', 'PHP', 'KNN', 'OpenAI API'],
    },
    {
        title: 'Full Stack Developer',
        company: 'Genefitletics',
        period: 'July 2023 – February 2024',
        bullets: [
            'Developed disease prediction algorithms using microbial and phenotype data.',
            'Designed and developed several client-facing Single Page Applications in Angular for patients and doctors.',
            'Implemented a scalable MySQL database for large-volume biological and user data.',
        ],
        tags: ['Angular', 'Python', 'MySQL', 'PHP', 'Flask'],
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
                            <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{job.title}</h3>
                            <p className="font-semibold mb-1" style={{ color: 'var(--accent)' }}>{job.company}</p>
                            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{job.period}</p>
                            <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
                                {job.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
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
