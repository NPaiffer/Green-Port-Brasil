import React from 'react';
import styles from '../styles/Footer.module.css';
 
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>Nicolas - RM554145</p>
        <p className={styles.text}>Melissa - RM552535</p>
      </div>
    </footer>
  );
};
 
export default Footer;