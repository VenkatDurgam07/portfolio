import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <footer className="footer bg-primary" id="contact">
            <div className="container footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">Let's Connect</h2>
                    <p className="footer-desc">
                        Passionate about learning and eager to make an impact. I am currently open to university admissions and related opportunities.
                    </p>

                    <div className="contact-info">
                        <a href="mailto:durgamvenkat7@gmail.com" className="contact-item">
                            <div className="contact-icon"><Mail size={20} /></div>
                            <span>durgamvenkat7@gmail.com</span>
                        </a>
                        <div className="contact-item">
                            <div className="contact-icon"><Phone size={20} /></div>
                            <span>+65 81361633</span>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><MapPin size={20} /></div>
                            <span>Blk 842F, Tampines Street 82 , #07-106, 526842</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">VD.</div>
                    <p className="footer-copyright">&copy; {new Date().getFullYear()} Durgam Venkat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
