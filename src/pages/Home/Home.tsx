import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
        <div className={styles.left}>
            <img src="/src/assets/images/portada1.jpg" alt="logo" />
            <p>Página en construcción</p>
        </div>
        <div className={styles.right}>
            
        </div>
    </div>
  );
};

export default Home;
