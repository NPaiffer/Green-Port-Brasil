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

        <div className={styles.article}>
        <h2>O Mercado de Carbono e seu Impacto no Mundo</h2>
        <p>O mercado de carbono surgiu como um mecanismo essencial para reduzir as emissões de gases de efeito estufa (GEE), promovendo um ambiente econômico mais sustentável. Este sistema permite que empresas que não utilizam toda a sua cota de emissão de GEE vendam o excedente para aquelas que ultrapassaram seus limites. Cada crédito de carbono equivale a uma tonelada de dióxido de carbono (CO2) que deixou de ser emitida na atmosfera.</p>
        <p>A regulamentação desse mercado é crucial para garantir que as reduções de emissões sejam alcançadas de forma eficiente e transparente. O Protocolo de Kyoto e o Acordo de Paris são marcos importantes que nortearam a criação de regras internacionais para a emissão de GEE. Para que as metas climáticas sejam atingidas, é necessário um crescimento significativo do mercado de carbono, ampliando as iniciativas de descarbonização.</p>
        <p>A neutralidade de carbono, ou carbono neutro, é alcançada quando as emissões de CO2 são balanceadas por medidas de compensação, como a compra de créditos de carbono. A pegada de carbono, que calcula o total de GEE gerados por atividades humanas e processos produtivos, é uma ferramenta fundamental para monitorar e reduzir as emissões, ajudando empresas e indivíduos a adotarem práticas mais sustentáveis.</p>
        </div>
    </div>
    </Layout>
);
};

export default Home;
