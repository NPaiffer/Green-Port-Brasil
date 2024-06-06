import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import ImageSlider from '../components/Slider';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
return (
    <Layout>
    <div className={styles.container}>
        <h1 className={styles.heading}>Green Port Brasil</h1>
        <p className={styles.paragraph}>Green Port é uma iniciativa para promover a sustentabilidade nos portos brasileiros.</p>

        <div className={styles.cards}>
        <Card title="Sustentabilidade" description="Práticas para reduzir o impacto ambiental." />
        <Card title="Inovação" description="Tecnologias para portos mais eficientes." />
        <Card title="Comunidade" description="Engajamento com a comunidade local." />
        </div>

        <h2 className={styles.sliderHeading}>Galeria de Imagens</h2>
        <ImageSlider />
    </div>
    </Layout>
);
};

export default Home;
