import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Brain,
    Code,
    Database,
    Terminal,
    GraduationCap,
    Clock,
    Calendar,
    Layers,
    CheckCircle2,
    Award,
    FileText,
    ExternalLink,
    Download
} from 'lucide-react';
import './Certificates.css';

const Certificates: React.FC = () => {
    const curriculumPillars = [
        {
            icon: <Brain className="pillar-icon text-cyan" size={24} />,
            title: 'AI & Generative AI Integration',
            description:
                'Exploration of AI subfields, deep learning fundamentals, and recommendation systems. Leveraging Generative AI in software workflows to streamline code generation, automated testing, and intelligent debugging while focusing on performance optimisation and scalability.'
        },
        {
            icon: <Code className="pillar-icon text-sky" size={24} />,
            title: 'Modern Frontend & React Architecture',
            description:
                'Mastering advanced web technologies including semantic HTML5, CSS Flexbox, Grid layouts, and responsive design systems. Creating, organising, and scaling modern React frontend applications with component-driven architecture.'
        },
        {
            icon: <Database className="pillar-icon text-teal" size={24} />,
            title: 'Backend Engineering, SSR & Databases',
            description:
                'Differentiating frontend vs. backend architecture. Implementing server-side rendering (SSR) and web services with Node.js and Python Flask, coupled with relational database modelling in SQL and NoSQL persistence with MongoDB.'
        },
        {
            icon: <Terminal className="pillar-icon text-purple" size={24} />,
            title: 'Programming Foundations & Python Data',
            description:
                'Strengthening core programming languages, algorithms, and web development foundations. Utilising Python for data manipulation, analytics, and data visualisation, with strict version control workflows via Git.'
        }
    ];

    const programmeFeatures = [
        { label: 'Faculty Instruction', detail: 'Pre-recorded video lectures from distinguished NUS Computing faculty' },
        { label: 'Hands-on Labs', detail: 'Immersive coding lab exercises testing complex logic and implementation' },
        { label: 'Capstone Project', detail: 'End-to-end full-stack web application integrating AI capabilities' },
        { label: 'Peer Engagement', detail: 'Collaborative exchange of ideas and strategies with a dynamic tech cohort' }
    ];

    const techTags = [
        'React',
        'Node.js',
        'Python',
        'Flask',
        'Generative AI',
        'Deep Learning',
        'Recommendation Systems',
        'MongoDB',
        'SQL & Data Modelling',
        'Git Version Control',
        'CSS Flexbox & Grid',
        'Responsive Design',
        'Server-Side Rendering (SSR)',
        'Performance Optimisation'
    ];

    const otherCertifications = [
        {
            title: 'SAT Score Report (1280)',
            issuer: 'College Board',
            badge: '84th Percentile',
            type: 'Academic Standardized Examination',
            description: 'Demonstrated competitive academic reasoning in Mathematics and Reading & Writing.',
            file: '/assets/SAT.pdf',
            icon: <Award size={26} />,
            colorClass: 'cert-blue'
        },
        {
            title: 'Operationally Ready Date (ORD) Certificate',
            issuer: 'Singapore Police Force (SPF)',
            badge: 'National Service',
            type: 'Ground Response Force (GRF)',
            description: 'Certified completion of active duty service, instilling discipline, resilience, and operational excellence.',
            file: '/assets/ORD Date.jpg.jpeg',
            icon: <CheckCircle2 size={26} />,
            colorClass: 'cert-orange'
        },
        {
            title: 'Leadership & Recommendation Letter',
            issuer: 'Interact Club & Rotary International',
            badge: 'Club President',
            type: 'Leadership & Community Service',
            description: 'Official recommendation recognizing presidential leadership, civic responsibility, and outreach execution.',
            file: '/assets/Interact Club Installation and reccomendation letter-merged.pdf',
            icon: <FileText size={26} />,
            colorClass: 'cert-purple'
        }
    ];

    return (
        <section className="section bg-light" id="certificates">
            <div className="container">
                <div className="certificates-header text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="certificates-badge">Credentials & Specializations</span>
                        <h2 className="section-title">Certificates & Professional Learning</h2>
                        <p className="certificates-subtitle">
                            Continuous professional training, specialized programmes, and verified academic credentials.
                        </p>
                    </motion.div>
                </div>

                {/* Featured Showcase: NUS Computing FSAI Programme */}
                <motion.div
                    className="featured-course-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Top Status Banner */}
                    <div className="featured-top-banner">
                        <div className="status-indicator">
                            <span className="status-pulse-dot"></span>
                            <span className="status-text">CURRENTLY ENROLLED • IN PROGRESS</span>
                        </div>
                        <div className="completion-standout-badge">
                            <Clock size={16} />
                            <span>Completes in Jan 1st Week</span>
                        </div>
                    </div>

                    <div className="featured-card-body">
                        {/* Header Info */}
                        <div className="featured-header-row">
                            <div className="institution-brand">
                                <div className="institution-logo-wrap">
                                    <GraduationCap size={32} />
                                </div>
                                <div className="institution-info">
                                    <div className="institution-name">
                                        National University of Singapore (NUS) • Computing
                                    </div>
                                    <h3 className="course-title">
                                        Full Stack Development with AI Programme (FSAI)
                                    </h3>
                                    <p className="course-type">
                                        Executive & Professional Technical Certification in Full Stack & Artificial Intelligence
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Programme Overview */}
                        <div className="course-overview-box">
                            <h4 className="box-title">
                                <Sparkles size={18} className="text-sky" /> Programme Overview
                            </h4>
                            <p className="overview-text">
                                In this comprehensive programme, I am exploring the frontiers of modern web development—mastering
                                both front-end and back-end technologies while gaining a deep understanding of Artificial
                                Intelligence (AI) and its seamless integration into full-stack development. The curriculum empowers
                                developers to streamline essential engineering tasks such as AI code generation, automated
                                testing, and intelligent debugging, while enabling a sharp focus on complex architectural logic and
                                creative problem-solving.
                            </p>
                            <p className="overview-text">
                                Through an immersive learning experience that combines pre-recorded video lectures from leading NUS
                                Computing faculty, hands-on lab exercises, and a capstone project, I am developing the expertise
                                needed to build robust, scalable, and adaptable applications that satisfy modern user expectations.
                                From client-side and server-side programming to crafting visually striking web applications, this
                                programme equips developers to thrive in the fast-paced world of technology and harness AI to drive
                                innovation and success.
                            </p>
                        </div>

                        {/* 4 Curriculum Pillars */}
                        <div className="pillars-section">
                            <h4 className="pillars-heading">
                                <Layers size={18} className="text-teal" /> Key Learning Competencies & Curriculum
                            </h4>
                            <div className="pillars-grid">
                                {curriculumPillars.map((pillar, idx) => (
                                    <div key={idx} className="pillar-card">
                                        <div className="pillar-header">
                                            {pillar.icon}
                                            <h5 className="pillar-title">{pillar.title}</h5>
                                        </div>
                                        <p className="pillar-desc">{pillar.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programme Methodology Grid */}
                        <div className="methodology-section">
                            <div className="methodology-grid">
                                {programmeFeatures.map((feat, idx) => (
                                    <div key={idx} className="methodology-item">
                                        <CheckCircle2 size={18} className="text-teal" />
                                        <div>
                                            <span className="methodology-label">{feat.label}: </span>
                                            <span className="methodology-detail">{feat.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="tech-tags-container">
                            <span className="tags-label">Technologies & Focus Areas:</span>
                            <div className="tech-tags-wrap">
                                {techTags.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Snapshot Footer */}
                        <div className="featured-card-footer">
                            <div className="footer-meta-item">
                                <span className="meta-label">Issuing Body</span>
                                <span className="meta-value">NUS Computing</span>
                            </div>
                            <div className="footer-meta-item">
                                <span className="meta-label">Schedule & Target</span>
                                <span className="meta-value text-standout">
                                    <Calendar size={15} /> Completes Jan 1st Week
                                </span>
                            </div>
                            <div className="footer-meta-item">
                                <span className="meta-label">Project</span>
                                <span className="meta-value">AI Full-Stack Capstone</span>
                            </div>
                            <div className="footer-meta-item">
                                <span className="meta-label">Current Status</span>
                                <span className="meta-badge-in-progress">In Progress</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Verified Certificates & Records */}
                <div className="other-certs-container">
                    <h3 className="other-certs-title">Additional Credentials & Documented Records</h3>
                    <div className="other-certs-grid">
                        {otherCertifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className={`other-cert-card ${cert.colorClass}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <div className="cert-top-row">
                                    <div className="cert-icon-wrap">{cert.icon}</div>
                                    <span className="cert-pill-badge">{cert.badge}</span>
                                </div>
                                <div className="cert-details">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <h4 className="cert-name">{cert.title}</h4>
                                    <span className="cert-type">{cert.type}</span>
                                    <p className="cert-desc">{cert.description}</p>
                                </div>
                                <div className="cert-actions">
                                    <a
                                        href={cert.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-btn cert-btn-secondary"
                                        title="Preview Credential"
                                    >
                                        <ExternalLink size={16} /> Preview
                                    </a>
                                    <a
                                        href={cert.file}
                                        download
                                        className="cert-btn cert-btn-primary"
                                        title="Download Document"
                                    >
                                        <Download size={16} /> Download
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
