import React from 'react';
import { motion } from 'framer-motion';
import { Target, HeartHandshake, Award, Shield, CheckCircle, MessageSquare, Lightbulb, UserCheck, Star } from 'lucide-react';
import './CategoriesGrid.css';

const CategoriesGrid: React.FC = () => {
    const categories = [
        { title: 'Co-curricular Activities', subtitle: '(Sports)', color: 'var(--color-card-1)', icon: <Target size={36} /> },
        { title: 'Community Service', subtitle: '& Volunteering', color: 'var(--color-card-2)', icon: <HeartHandshake size={36} /> },
        { title: 'Leadership Roles', subtitle: '', color: 'var(--color-card-3)', icon: <Award size={36} /> },
        { title: 'Work Experience', subtitle: '/ National Service', color: 'var(--color-card-4)', icon: <Shield size={36} /> },
        { title: 'Personal Achievements', subtitle: '', color: 'var(--color-card-5)', icon: <CheckCircle size={36} /> },
        { title: 'Testimonials', subtitle: '& Recommendations', color: 'var(--color-card-6)', icon: <MessageSquare size={36} /> },
        { title: 'Initiative', subtitle: '& Contributions', color: 'var(--color-card-7)', icon: <Lightbulb size={36} /> },
        { title: 'National Service Record', subtitle: '', color: 'var(--color-primary)', icon: <UserCheck size={36} color="white" />, isDark: true },
        { title: 'Other Achievements', subtitle: '', color: 'var(--color-card-8)', icon: <Star size={36} /> }
    ];

    return (
        <section className="section bg-white" id="categories">
            <div className="container">
                <h2 className="section-title">Explore My Journey</h2>
                <div className="categories-grid">
                    {categories.map((cat, idx) => (
                        <motion.a
                            href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                            key={idx}
                            className="category-tile"
                            style={{ backgroundColor: cat.color, color: cat.isDark ? 'white' : 'var(--color-text)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                        >
                            <div className="category-icon">{cat.icon}</div>
                            <div className="category-text">
                                <h3 className="category-title">{cat.title}</h3>
                                {cat.subtitle && <p className="category-subtitle">{cat.subtitle}</p>}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesGrid;
