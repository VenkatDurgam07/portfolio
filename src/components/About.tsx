import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, GraduationCap, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="section bg-white" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-grid">
                        <div className="about-text-container">
                            <p className="about-paragraph">
                                I am a highly motivated and disciplined student who recently completed the CBSE Senior Secondary examination (2025), ranking among the top 15 students in my school. Currently, I am honored to serve my National Service in the Singapore Police Force (SPF – GRF). This experience has profoundly shaped my resilience, instilling in me an unwavering commitment to duty and character.
                            </p>
                            <p className="about-paragraph">
                                Beyond academics and service, I am deeply passionate about sports and community impact. As an avid player of basketball, volleyball, badminton, and tennis, I believe in the power of teamwork and continuous self-improvement. My proven leadership journey includes active involvement in community service, cultural activities, and high-profile events such as the Chingay Parade. I am driven by the desire to leverage my academic foundation, leadership acumen, and dedication to effect meaningful, positive change in a university environment and beyond.
                            </p>
                        </div>

                        <div className="about-features">
                            <div className="feature-card">
                                <div className="feature-icon bg-blue"><GraduationCap size={24} /></div>
                                <div>
                                    <h4 className="feature-title">Academic Excellence</h4>
                                    <p className="feature-desc">Top 15 student in RMK Residential Senior Secondary School</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon bg-teal"><Flag size={24} /></div>
                                <div>
                                    <h4 className="feature-title">National Service</h4>
                                    <p className="feature-desc">Active service with SPF (GRF), demonstrating discipline and commitment</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon bg-orange"><Target size={24} /></div>
                                <div>
                                    <h4 className="feature-title">Athletic Passion</h4>
                                    <p className="feature-desc">Competitive player in basketball, tennis, volleyball & badminton</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon bg-purple"><Users size={24} /></div>
                                <div>
                                    <h4 className="feature-title">Community Impact</h4>
                                    <p className="feature-desc">Active organizer for school events and the Chingay Parade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
