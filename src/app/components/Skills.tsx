import React from 'react';
import ScrollAnimator from './ScrollAnimator';

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
        <ScrollAnimator>
            <section id="skills" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">04.</span> Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skillCategories.map(category => (
                        <div key={category.title}>
                            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/10">{category.title}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-white/10 flex items-center justify-center p-2.5 group-hover:border-violet-400/50 group-hover:bg-violet-500/10 transition duration-200">
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
                                        <span className="text-xs text-slate-400 text-center leading-tight group-hover:text-violet-300 transition">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Skills;
