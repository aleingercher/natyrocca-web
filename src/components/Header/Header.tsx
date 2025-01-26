import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	const location = useLocation()

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<h1><Link to='/'>natyrocca</Link></h1>
        <h2 className={location.pathname !== '/' ? styles.fadeIn : ''}>
          {location.pathname !== '/' ? location.pathname : ''}
        </h2>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						proyectos
						<ul className={styles.submenu}>
							<li>
								<Link to='/cesteria-textil'>cesteria textil</Link>
							</li>
							<li>
								<Link to='/fotografia'>fotografía</Link>
							</li>
						</ul>
					</li>
					<li className={location.pathname === '/sobre-mi' ? styles.active : ''}>
						<Link to='/sobre-mi'>sobre mí</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
