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
          <li className={location.pathname === '/' ? styles.active : ''}>
            <Link to="/">proyectos</Link>
            <ul className={styles.submenu}>
              <li><Link to="/cesteria-textil">cesteria textil</Link></li>
              <li><Link to="/antotipias">fotografía</Link></li>
            </ul>
          </li>
          <li className={location.pathname === '/about' ? styles.active : ''}>
            <Link to="/about">sobre mí</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;