'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python',     icon: 'python/python-original.svg' },
            { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
            { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
            { name: 'SQL',        icon: 'postgresql/postgresql-original.svg' },
            { name: 'PHP',        icon: 'php/php-original.svg' },
            { name: 'Bash',       icon: 'bash/bash-original.svg' },
        ],
    },
    {
        title: 'Backend & Streaming',
        skills: [
            { name: 'Apache Kafka', icon: 'apachekafka/apachekafka-original.svg' },
            { name: 'Node.js',      icon: 'nodejs/nodejs-original.svg' },
            { name: 'Fastify',      icon: 'fastify/fastify-original.svg' },
            { name: 'RabbitMQ',     icon: 'rabbitmq/rabbitmq-original.svg' },
            { name: 'Express.js',   icon: 'express/express-original.svg' },
        ],
    },
    {
        title: 'Databases & Caching',
        skills: [
            { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
            { name: 'MySQL',      icon: 'mysql/mysql-original.svg' },
            { name: 'Redis',      icon: 'redis/redis-original.svg' },
            { name: 'MongoDB',    icon: 'mongodb/mongodb-original.svg' },
        ],
    },
    {
        title: 'Cloud, DevOps & OS',
        skills: [
            { name: 'Docker',     icon: 'docker/docker-original.svg' },
            { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain.svg' },
            { name: 'AWS',        icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg' },
            { name: 'Linux / Unix', icon: 'linux/linux-original.svg' },
            { name: 'Git',        icon: 'git/git-original.svg' },
        ],
    },
    {
        title: 'Observability & Tooling',
        skills: [
            { name: 'OpenTelemetry', icon: 'opentelemetry/opentelemetry-original.svg' },
            { name: 'GitHub',        icon: 'github/github-original.svg' },
        ],
    },
    {
        title: 'Frontend & UI',
        skills: [
            { name: 'React',       icon: 'react/react-original.svg' },
            { name: 'Angular',     icon: 'angularjs/angularjs-original.svg' },
            { name: 'Tailwind CSS',icon: 'tailwindcss/tailwindcss-original.svg' },
            { name: 'HTML5',       icon: 'html5/html5-original.svg' },
            { name: 'CSS3',        icon: 'css3/css3-original.svg' },
        ],
    },
];

const methodologies = [
    'Event-Driven Architecture',
    'High-Throughput Microservices',
    'OpenTelemetry Distributed Tracing',
    'Kafka Stream Ingestion & Replay',
    'SLA Monitoring & Reliability',
    'AI-Assisted Engineering (Cursor, Copilot)',
    'Zero-Downtime Telemetry Ingestion',
    'Database Indexing & Query Optimization',
];

const Skills: React.FC = () => {
    return (
        <motion.section
            id="skills"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-12 flex items-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">04.</span> Skills & Technologies
            </h2>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.08, type: 'spring', stiffness: 80, damping: 20 }}
                    >
                        <h3
                            className="text-base font-bold mb-6 pb-2 flex items-center justify-between"
                            style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
                        >
                            <span>{category.title}</span>
                            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                                {category.skills.length} tools
                            </span>
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {category.skills.map((skill, skillIdx) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-2 group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIdx * 0.05 + skillIdx * 0.04 }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition duration-200"
                                        style={{
                                            backgroundColor: 'var(--bg-muted)',
                                            border: '1px solid var(--border)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent)';
                                            e.currentTarget.style.backgroundColor = 'rgba(var(--accent-rgb), 0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--border)';
                                            e.currentTarget.style.backgroundColor = 'var(--bg-muted)';
                                        }}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={`${DEVICON}${skill.icon}`}
                                            alt={skill.name}
                                            width={28}
                                            height={28}
                                            className="w-7 h-7 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span
                                        className="text-xs text-center leading-tight transition font-medium"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Engineering Methodologies & Architecture Patterns */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 rounded-2xl"
            >
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--accent)' }}>
                    Architecture Patterns &amp; Engineering Practices
                </h4>
                <div className="flex flex-wrap gap-2.5">
                    {methodologies.map((item) => (
                        <span
                            key={item}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg"
                            style={{
                                backgroundColor: 'var(--bg-muted)',
                                color: 'var(--text)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Skills;
