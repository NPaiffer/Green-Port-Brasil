import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
return (
    <Layout>
    <h1 className={styles.h1}>Green Port Brasil</h1>
    <p className={styles.p}>Green Port é uma iniciativa para promover a sustentabilidade nos portos brasileiros.</p>
    </Layout>
);
};

export default Home;
