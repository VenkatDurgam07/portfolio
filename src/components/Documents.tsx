import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import './Documents.css';

const Documents: React.FC = () => {
    const docs = [
        {
            title: 'SAT Report',
            description: 'Official SAT Score Report (1280, 84th Percentile)',
            type: 'PDF Document',
            file: '/assets/SAT.pdf',
            colorClass: 'doc-blue'
        },
        {
            title: 'ORD Certificate',
            description: 'Operationally Ready Date (ORD) - SPF',
            type: 'Image Document',
            file: '/assets/ORD Date.jpg.jpeg',
            colorClass: 'doc-orange'
        },
        {
            title: 'Recommendation Letter',
            description: 'Interact Club Installation and Recommendation Letter',
            type: 'PDF Document',
            file: '/assets/Interact Club Installation and reccomendation letter-merged.pdf',
            colorClass: 'doc-purple'
        },
        {
            title: 'CV / Resume',
            description: 'Detailed Venkat Durgam CV Document',
            type: 'Word Document',
            file: '/assets/Venkat Durgam CV.docx',
            colorClass: 'doc-teal'
        }
    ];

    return (
        <section className="section bg-light" id="documents">
            <div className="container">
                <h2 className="section-title">Certifications & Documents</h2>

                <div className="documents-grid">
                    {docs.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            className={`doc-card ${doc.colorClass}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="doc-icon-container">
                                <FileText size={40} />
                            </div>
                            <div className="doc-content">
                                <span className="doc-type">{doc.type}</span>
                                <h3 className="doc-title">{doc.title}</h3>
                                <p className="doc-desc">{doc.description}</p>
                            </div>
                            <div className="doc-actions">
                                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="btn-icon" title="Preview">
                                    <ExternalLink size={20} /> Preview
                                </a>
                                <a href={doc.file} download className="btn-icon btn-icon-primary" title="Download">
                                    <Download size={20} /> Download
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Documents;
