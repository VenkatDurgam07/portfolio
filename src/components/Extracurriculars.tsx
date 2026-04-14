import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Music, Heart, Globe } from 'lucide-react';
import './Extracurriculars.css';

const Extracurriculars: React.FC = () => {
    const activities = [
        {
            category: 'Sports & Athletics',
            icon: <Activity size={28} />,
            items: ['Basketball', 'Volleyball', 'Badminton', 'Tennis'],
            description: 'Active participation in multiple competitive sports, developing agility, teamwork, and strategic thinking.',
            colorClass: 'extra-blue'
        },
        {
            category: 'Dance & Arts',
            icon: <Music size={28} />,
            items: ['Performances', 'Choreography', 'Teaching Juniors'],
            description: 'Engaged in creative expression through dance, including organizing routines and mentoring junior students.',
            colorClass: 'extra-purple'
        },
        {
            category: 'Community Service',
            icon: <Heart size={28} />,
            items: ['Fundraising', 'Outreach', 'Volunteer Work'],
            description: 'Dedicated to giving back through structured community service activities and grassroots initiatives.',
            colorClass: 'extra-orange'
        },
        {
            category: 'Cultural Events',
            icon: <Globe size={28} />,
            items: ['Chingay Parade', 'School Annual Days', 'Festivals'],
            description: 'Active participation and organizational roles in large-scale cultural events and public parades.',
            colorClass: 'extra-teal'
        }
    ];

    return (
        <section className="section bg-white" id="extracurriculars">
            <div className="container">
                <h2 className="section-title">Beyond the Classroom</h2>
                <div className="extra-grid">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            className={`extra-card ${activity.colorClass}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="extra-icon">{activity.icon}</div>
                            <h3 className="extra-title">{activity.category}</h3>
                            <p className="extra-desc">{activity.description}</p>
                            <div className="extra-tags">
                                {activity.items.map((item, idy) => (
                                    <span key={idy} className="extra-tag">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Extracurriculars;
