import React from 'react'
import styles from './Home.module.scss'

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<div className={styles.left}>
				<img src='/images/portada1.jpg' alt='portada' />
				<p>Página en construcción</p>
			</div>
			<div className={styles.right}></div>
		</div>
	)
}

export default Home
