import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Equipe.module.css';

const Equipe: React.FC = () => {
return (
    <Layout>
    <div className={styles.container}>
        <h1 className={styles.heading}>Equipe</h1>
        <ul className={styles.list}>
        <li className={styles.listItem}>RM554145 - Nicolas</li>
        <li className={styles.listItem}>RM552535 - Melissa</li>
        </ul>
    </div>
    </Layout>
);
};

export default Equipe;
