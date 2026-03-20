'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <motion.section
            id="contact"
            className="py-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }} className="mr-3">05.</span> Get In Touch
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
                I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I&apos;ll do my best to get back to you!
            </p>
            <motion.a
                href="mailto:hlaxkar@gmail.com"
                className="inline-block font-semibold px-8 py-4 rounded-xl transition duration-300"
                style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
            >
                Say Hello
            </motion.a>
        </motion.section>
    );
};

export default Contact;
