import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita la navegación al hacer clic en el padre
    setSubmenuOpen((prev) => !prev);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">natyrocca</Link>
        </h1>
        <h2 className={location.pathname !== '/' ? styles.fadeIn : ''}>
          {location.pathname !== '/' ? location.pathname : ''}
        </h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.parent}>
            <a
              href="#"
              className={styles.parentLink}
              onClick={handleParentClick}
            >
              proyectos
            </a>
            <ul
              className={`${styles.submenu} ${
                submenuOpen ? styles.open : ''
              }`}
            >
              <li onClick={closeSubmenu}>
                <Link to="/cesteria-textil">cesteria textil</Link>
              </li>
              <li onClick={closeSubmenu}>
                <Link to="/fotografia">fotografía</Link>
              </li>
            </ul>
          </li>
          <li
            className={
              location.pathname === '/sobre-mi' ? styles.active : ''
            }
          >
            <Link to="/sobre-mi" onClick={closeSubmenu}>
              sobre mí
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
