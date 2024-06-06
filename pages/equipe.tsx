import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Equipe.module.css';

const Equipe: React.FC = () => {
return (
    <Layout>
    <h1 className={styles.heading}>Equipe</h1>
    <ul className={styles.list}>
        <li className={styles.listItem}>Nicolas</li>
        <li className={styles.listItem}>Melissa</li>
    </ul>
    </Layout>
);
};

export default Equipe;
