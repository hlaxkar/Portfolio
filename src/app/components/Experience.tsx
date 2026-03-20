import React from 'react';
import ScrollAnimator from './ScrollAnimator';

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
        <ScrollAnimator>
            <section id="experience" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">02.</span> Where I&apos;ve Worked
                </h2>
                <div className="relative border-l-2 border-slate-700 ml-4">
                    {jobs.map((job) => (
                        <div key={job.company} className="mb-12 pl-12 relative">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-violet-400 rounded-full border-4 border-slate-800"></div>
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                            <p className="text-violet-400 font-semibold mb-1">{job.company}</p>
                            <p className="text-sm text-slate-500 mb-4">{job.period}</p>
                            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
                                {job.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-white/10">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Experience;
