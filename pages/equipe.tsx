import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Equipe.module.css';

const Equipe: React.FC = () => {
return (
    <Layout>
    <h1 className={styles.h1}>Equipe</h1>
    <ul className={styles.ul}>
        <li className={styles.li}>Nicolas</li>
        <li className={styles.li}>Melissa</li>
    </ul>
    </Layout>
);
};

export default Equipe;
