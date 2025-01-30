import React from 'react'
import styles from './ImageStrip.module.scss'

interface ImageStripProps {
	images: string[]
	titles: string[]
}

const ImageStrip: React.FC<ImageStripProps> = ({ images, titles }) => {
	return (
		<div className={styles.imageStrip}>
			{images.map((image, index) => (
				<div className={styles.frame}>
					<img key={index} src={image} alt={titles[index]} />
					<h2>{titles[index]}</h2>
				</div>
			))}
		</div>
	)
}

export default ImageStrip
