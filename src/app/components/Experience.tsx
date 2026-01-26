import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Experience: React.FC = () => {
    return (
        <ScrollAnimator>
            <section id="experience" className="py-20">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-violet-400 mr-3">02.</span> Where I&apos;ve Worked
                </h2>
                <div className="relative border-l-2 border-slate-700 ml-4">
                    <div className="mb-12 pl-12 relative">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-violet-400 rounded-full border-4 border-slate-800"></div>
                        <h3 className="text-xl font-bold text-white">Backend Developer</h3>
                        <p className="text-violet-400 font-semibold mb-1">Intangles</p>
                        <p className="text-sm text-slate-500 mb-4">November 2025 - Present</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Developed and maintained scalable Node.js microservices for IoT and videomatics platforms.</li>
                            <li>Processed real-time vehicle telemetry and camera data streams to detect driver behavior and road conditions.</li>
                            <li>Enabled predictive analytics and alerting systems to support large-scale fleet operations.</li>
                        </ul>
                    </div>
                    <div className="mb-12 pl-12 relative">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-violet-400 rounded-full border-4 border-slate-800"></div>
                        <h3 className="text-xl font-bold text-white">Associate Consultant Full Stack Developer</h3>
                        <p className="text-violet-400 font-semibold mb-1">Oodles Technologies</p>
                        <p className="text-sm text-slate-500 mb-4">June 2024 - November 2025</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Led the backend migration of a legacy CRM from Laravel/PostgreSQL to Node.js/MySQL, improving API response time from ~25s to 200ms.</li>
                            <li>Developed a personalized food recommendation engine using a K-Nearest Neighbors (KNN) model.</li>
                            <li>Built a PHP chatbot plugin with a React frontend, integrating OpenAI and Amazon APIs.</li>
                        </ul>
                    </div>
                    <div className="mb-12 pl-12 relative">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-violet-400 rounded-full border-4 border-slate-800"></div>
                        <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                        <p className="text-violet-400 font-semibold mb-1">Genefitletics</p>
                        <p className="text-sm text-slate-500 mb-4">July 2023 - Feb 2024</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Developed disease prediction algorithms using microbial and phenotype data.</li>
                            <li>Designed and developed several client-facing Single Page Applications in Angular for patients and doctors.</li>
                            <li>Implemented a scalable MySQL database for large-volume biological and user data.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </ScrollAnimator>
    );
};

export default Experience;
