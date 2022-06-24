import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Лобан Владислав</h2>
                <div className={styles.textContainer}>
                    <div className={styles.text}></div>
                    <div className={styles.text}></div>
                    <div className={styles.text}></div>
                    <div className={styles.text}></div>
                </div>
                <span className={styles.title}>© Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;