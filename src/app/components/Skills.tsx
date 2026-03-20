'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python',     icon: 'python/python-original.svg' },
            { name: 'PHP',        icon: 'php/php-original.svg' },
            { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
            { name: 'C++',        icon: 'cplusplus/cplusplus-original.svg' },
            { name: 'SQL',        icon: 'mysql/mysql-original.svg' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'Angular',     icon: 'angularjs/angularjs-original.svg' },
            { name: 'Node.js',     icon: 'nodejs/nodejs-original.svg' },
            { name: 'Express.js',  icon: 'express/express-original.svg' },
            { name: 'React',       icon: 'react/react-original.svg' },
            { name: 'Flask',       icon: 'flask/flask-original.svg' },
            { name: 'Tailwind CSS',icon: 'tailwindcss/tailwindcss-original.svg' },
        ],
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'Git',     icon: 'git/git-original.svg' },
            { name: 'Docker',  icon: 'docker/docker-original.svg' },
            { name: 'Redis',   icon: 'redis/redis-original.svg' },
            { name: 'MySQL',   icon: 'mysql/mysql-original.svg' },
            { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
            { name: 'Figma',   icon: 'figma/figma-original.svg' },
        ],
    },
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1, type: 'spring', stiffness: 80, damping: 20 }}
                    >
                        <h3
                            className="text-lg font-bold mb-6 pb-2"
                            style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
                        >
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {category.skills.map((skill, skillIdx) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-2 group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center p-2.5 transition duration-200"
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
                                        className="text-xs text-center leading-tight transition"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
