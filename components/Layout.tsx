import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';

type LayoutProps = {
children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
    <div>
    <nav className={styles.nav}>
        <ul className={styles.ul}>
        <li className={styles.li}>
            <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.li}>
            <Link href="/cadastro" className={styles.link}>Cadastro</Link>
        </li>
        <li className={styles.li}>
            <Link href="/login" className={styles.link}>Login</Link>
        </li>
        <li className={styles.li}>
            <Link href="/equipe" className={styles.link}>Equipe</Link>
        </li>
        </ul>
    </nav>
    <main>{children}</main>
    <Footer/>
    </div>
);
};

export default Layout;
