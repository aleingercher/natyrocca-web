import React from 'react'
import styles from './About.module.scss'
import dataAbout from '../../data/dataAbout'
import TextImage from '../../components/TextImage/TextImage'

const About: React.FC = () => {

	return (
		<div className={styles.about}>
			{dataAbout.map((data, index) => (
				<TextImage key={index} {...data} />
			))}
		</div>
	)
}

export default About
