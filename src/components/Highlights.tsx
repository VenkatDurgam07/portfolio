import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Star, ShieldCheck } from 'lucide-react';
import './Highlights.css';

const Highlights: React.FC = () => {
    const highlights = [
        {
            icon: <BookOpen size={32} />,
            title: 'SAT Score',
            value: '1280',
            subtitle: '84th Percentile',
            colorClass: 'highlight-blue'
        },
        {
            icon: <Trophy size={32} />,
            title: 'Academic Rank',
            value: 'Top 15',
            subtitle: 'RMK Residential',
            colorClass: 'highlight-teal'
        },
        {
            icon: <Star size={32} />,
            title: 'Leadership',
            value: '1 Year',
            subtitle: 'Interact Club President',
            colorClass: 'highlight-purple'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'National Service',
            value: 'SPF (GRF)',
            subtitle: 'Active Service',
            colorClass: 'highlight-orange'
        }
    ];

    return (
        <section className="section bg-light" id="highlights">
            <div className="container">
                <h2 className="section-title">Key Highlights</h2>
                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`highlight-card ${item.colorClass}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="highlight-icon">{item.icon}</div>
                            <div className="highlight-content">
                                <h4 className="highlight-title">{item.title}</h4>
                                <div className="highlight-value">{item.value}</div>
                                <p className="highlight-subtitle">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
