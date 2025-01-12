import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>natyrocca</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          {/* <li><Link to="/">proyectos</Link></li>
          <li><Link to="/about">sobre mi</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;