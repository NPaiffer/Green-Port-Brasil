import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import styles from '../styles/Cadastro.module.css';

const Cadastro: React.FC = () => {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const reqLog = async ()=>{
    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:8081/empresas/",
        headers:{"Content-Type":"application/json"},
        data:{
        "nome": nome,
          "email":email,
          "senha":senha
        }
      })
      console.log(response);
      alert('Cadastro realizado com sucesso!');
    }catch(error){
        alert('Erro ao realizar cadastro.');
    }
  }



return (
    <Layout>
    <div className={styles.container}>
        <h1>Cadastro</h1>
        <form className={styles.form} onSubmit={reqLog}>
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
