import React from 'react';
import Header from '../../components/Header/Header';
import styles from './MainLayout.module.scss';
import Footer from '../../components/Footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;  // El contenido de cada página será inyectado aquí
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
