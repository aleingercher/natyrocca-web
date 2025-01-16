import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.footer__logo} />
            </a>
            <a href="mailto:natyrocca@gmail.com" className={styles.footer__email}>natyrocca@gmail.com</a>
        </footer>
    );
};

export default Footer;