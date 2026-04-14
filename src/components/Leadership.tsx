import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, Megaphone } from 'lucide-react';
import './Leadership.css';

const Leadership: React.FC = () => {
    const roles = [
        {
            title: 'Interact Club President',
            duration: '1 Year',
            description: 'Led student initiatives and coordinated high-impact community outreach programs, fostering civic responsibility.',
            icon: <Users size={32} />,
            colorClass: 'leadership-primary'
        },
        {
            title: 'Class Leader',
            duration: 'Grade 12',
            description: 'Represented class cohort, coordinating academic and student activities while serving as the primary liaison between faculty and students.',
            icon: <Briefcase size={32} />,
            colorClass: 'leadership-secondary'
        },
        {
            title: 'Cultural Secretary',
            duration: 'Grade 12',
            description: 'Organized major school events and cultural programs, managing cross-functional student teams to execute successful programming.',
            icon: <Megaphone size={32} />,
            colorClass: 'leadership-tertiary'
        },
        {
            title: 'Annual Day Organizer & Participant',
            duration: 'Grade 11/12',
            description: 'Managed event execution logistics and actively participated in creative performances for thousands of attendees.',
            icon: <Calendar size={32} />,
            colorClass: 'leadership-quaternary'
        }
    ];

    return (
        <section className="section bg-light" id="leadership-roles">
            <div className="container">
                <div className="leadership-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Leadership Experience
                    </motion.h2>
                    <motion.p
                        className="leadership-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A proven track record of inspiring teams, organizing major events, and driving community impact.
                    </motion.p>
                </div>

                <div className="leadership-grid">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            className={`leadership-card ${role.colorClass}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="leadership-icon-wrapper">
                                {role.icon}
                            </div>
                            <div className="leadership-content">
                                <span className="leadership-duration">{role.duration}</span>
                                <h3 className="leadership-title">{role.title}</h3>
                                <p className="leadership-desc">{role.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
