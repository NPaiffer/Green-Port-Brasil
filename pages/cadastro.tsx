import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import styles from '../styles/Cadastro.module.css';

const Cadastro: React.FC = () => {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
    await axios.post('http://localhost:8081/empresas/', { nome, email, senha });
    alert('Cadastro realizado com sucesso!');
    } catch (error) {
    alert('Erro ao realizar cadastro.');
    }
};

return (
    <Layout>
    <div className={styles.container}>
        <h1>Cadastro</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            className={styles.input}
        />
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}
        />
        <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            className={styles.input}
        />
        <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
    </div>
    </Layout>
);
};

export default Cadastro;
