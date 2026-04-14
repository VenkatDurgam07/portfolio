import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Book } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
    const educationTimeline = [
        {
            institution: 'RMK Residential Senior Secondary School, India',
            period: 'March 2024 – March 2025',
            grade: 'A2 (85%)',
            details: 'Secondary (12th class) - Top 15 student in RMK Residential Senior Secondary School.',
            icon: <GraduationCap size={24} />
        },
        {
            institution: 'RMK Residential Senior Secondary School, India',
            period: 'March 2023 – March 2024',
            grade: 'B1 (79.86%)',
            details: 'Secondary (11th class).',
            icon: <GraduationCap size={24} />
        },
        {
            institution: 'RMK Residential Senior Secondary School, India',
            period: 'March 2021 – March 2023',
            grade: 'A2 (85%)',
            details: 'Secondary (9th and 10th class).',
            icon: <Award size={24} />
        },
        {
            institution: 'RMK Residential Senior Secondary School, India',
            period: 'April 2018 – March 2021',
            grade: 'A1/A2',
            details: 'Middle School ( 6th to 8th). Results: 6th : A1, 7th: A2, 8th: A1',
            icon: <Book size={24} />
        },
        {
            institution: 'Tampines Primary School, Sri Sathya Sai Kindergarten',
            period: 'Early Education',
            grade: '',
            details: 'Formative education completed in Singapore.',
            icon: <Book size={24} />
        }
    ];

    return (
        <section className="section bg-white" id="education">
            <div className="container">
                <h2 className="section-title">Education Journey</h2>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {educationTimeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                        >
                            <div className="timeline-dot">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-period">{item.period}</span>
                                <h3 className="timeline-institution">{item.institution}</h3>
                                {item.grade && <div className="timeline-grade">Grade: <span className="highlight-text">{item.grade}</span></div>}
                                <p className="timeline-details">{item.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
