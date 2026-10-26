import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Globe2 } from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
    const techSkills = [
        'Full Stack Development',
        'Artificial Intelligence (AI)',
        'Generative AI Integration',
        'React',
        'Python (Data Manipulation & Visualisation)',
        'Node.js',
        'Flask',
        'MongoDB',
        'SQL & Data Modelling',
        'Git Version Control',
        'Responsive Design (Flexbox & Grid)',
        'Server-Side Rendering (SSR)',
        'Algorithms & Web Fundamentals'
    ];

    const coreSkills = [
        'Leadership & Team Management',
        'Effective Communication',
        'Strategic Problem Solving',
        'Adaptability & Resilience',
        'Collaborative Execution',
        'Civic Responsibility'
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
                <div className="skills-main-wrapper">
                    {/* Technical & AI Competencies (from NUS Computing FSAI) */}
                    <motion.div
                        className="tech-skills-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="skills-heading-row">
                            <Code size={24} className="text-teal" />
                            <h2 className="section-title text-left mb-0">Technical & AI Competencies</h2>
                        </div>
                        <p className="skills-intro">
                            Full-stack engineering, programming, and generative AI skill set developed through NUS Computing's FSAI Programme.
                        </p>
                        <div className="skills-tags tech-tags-special">
                            {techSkills.map((skill, idx) => (
                                <span key={idx} className="skill-tag skill-tag-tech">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Core Skills & Languages Grid */}
                    <div className="skills-layout">
                        <motion.div
                            className="skills-container"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="skills-heading-row">
                                <Users size={24} className="text-sky" />
                                <h2 className="section-title text-left mb-0">Leadership & Soft Skills</h2>
                            </div>
                            <div className="skills-tags">
                                {coreSkills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {skill}
                                    </span>
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
                            <div className="skills-heading-row">
                                <Globe2 size={24} className="text-purple" />
                                <h2 className="section-title text-left mb-0">Languages</h2>
                            </div>
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
            </div>
        </section>
    );
};

export default Skills;
