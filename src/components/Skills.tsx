import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills: React.FC = () => {
    const skills = [
        'Leadership',
        'Communication',
        'Teamwork',
        'Adaptability',
        'Collaboration',
        'Responsibility'
    ];

    const languages = [
        { name: 'English', level: 'Fluent / Native' },
        { name: 'Telugu', level: 'Conversational' },
        { name: 'Hindi', level: 'Proficient' },
        { name: 'Tamil', level: 'Conversational' }
    ];

    return (
        <section className="section bg-light" id="skills">
            <div className="container">
                <div className="skills-layout">
                    <motion.div
                        className="skills-container"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title text-left">Core Skills</h2>
                        <div className="skills-tags">
                            {skills.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="languages-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="section-title text-left">Languages</h2>
                        <div className="languages-list">
                            {languages.map((lang, idx) => (
                                <div key={idx} className="language-item">
                                    <span className="language-name">{lang.name}</span>
                                    <span className="language-level">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
