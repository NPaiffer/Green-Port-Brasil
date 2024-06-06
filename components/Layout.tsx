import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
    <div>
    <nav className={styles.nav}>
        <ul className={styles.ul}>
        <li className={styles.li}>
            <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
            <Link href="/cadastro">Cadastro</Link>
        </li>
        <li className={styles.li}>
            <Link href="/login">Login</Link>
        </li>
        <li className={styles.li}>
            <Link href="/equipe">Equipe</Link>
        </li>
        </ul>
    </nav>
    <main>{children}</main>
    </div>
);
};

export default Layout;
