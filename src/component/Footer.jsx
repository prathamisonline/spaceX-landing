import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <img className="logo" src="media/logo.png" alt="logo" />
            <div className="social-links">
                <p className="social-link">Twitter</p>
                <p className="social-link">Youtube</p>
                <p className="social-link">Instagram</p>
                <p className="social-link">Flickr</p>
                <p className="social-link">LinkedIn</p>
                <p className="privacy-policy">Privacy</p>
                <p className="privacy-policy">Policy</p>
            </div>
            <p className="contact-info">For additional questions, contact spacex@spacex.com</p>
            <button className="contact-button">Contact us</button>
        </div>
    );
};

export default Footer;
