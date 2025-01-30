import React from 'react'
import styles from './Fotografia.module.scss'
import dataFotografia from '../../data/dataFotografia'
import TextImage from '../../components/TextImage/TextImage'

const Fotografia: React.FC = () => {
	return (
		<div className={styles.fotografia}>
			{dataFotografia.map((data, index) => (
				<TextImage key={index} {...data} />
			))}
		</div>
	)
}

export default Fotografia