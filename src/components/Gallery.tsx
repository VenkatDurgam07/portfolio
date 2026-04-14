import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery: React.FC = () => {
    const images = [
        {
            src: '/assets/Interact Club Basic Neccessities.jpeg',
            title: 'Support & Outreach',
            category: 'Community Work',
            colSpan: 2
        },
        {
            src: '/assets/Tennis Cup.jpeg',
            title: 'Tennis Championship',
            category: 'Sports Achievements',
            colSpan: 1
        },
        {
            src: '/assets/Annual Day.jpeg',
            title: 'Performance',
            category: 'Cultural Events',
            colSpan: 1
        },
        {
            src: '/assets/Annual Day 2.jpeg',
            title: 'Event Execution',
            category: 'Cultural Events',
            colSpan: 1
        },
        {
            src: '/assets/Interact Club Computer.jpeg',
            title: 'Digital Literacy',
            category: 'Community Work',
            colSpan: 1
        }
    ];

    return (
        <section className="section bg-light" id="gallery">
            <div className="container">
                <div className="gallery-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Visual Journey
                    </motion.h2>
                    <motion.p
                        className="gallery-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Highlights from my time leading the Interact Club, participating in sports, and managing cultural events.
                    </motion.p>
                </div>

                <div className="gallery-grid">
                    {images.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`gallery-item ${item.colSpan === 2 ? 'col-span-2' : ''}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <img src={item.src} alt={item.title} className="gallery-image" />
                            <div className="gallery-overlay">
                                <span className="gallery-category">{item.category}</span>
                                <h3 className="gallery-title">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
