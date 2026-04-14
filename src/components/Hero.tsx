import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="hero-badge">University Applicant</div>
                    <h1 className="hero-title">
                        Durgam Venkat
                    </h1>
                    <h2 className="hero-subtitle">
                        Student | Aspiring University Candidate | Leader & Community Contributor
                    </h2>
                    <p className="hero-tagline">
                        Disciplined, driven, and passionate about leadership, academics, and community impact.
                    </p>
                    <div className="hero-buttons">
                        <a href="#highlights" className="btn btn-primary">
                            View Portfolio <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me <Mail size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="hero-image-wrapper">
                        <img
                            src="/assets/Profile Photo.jpeg"
                            alt="Durgam Venkat"
                            className="hero-image"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://ui-avatars.com/api/?name=Durgam+Venkat&background=0ea5e9&color=fff&size=512';
                            }}
                        />
                        <div className="hero-image-backdrop"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
