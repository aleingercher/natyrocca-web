import React from 'react'
import styles from './ButtonLarge.module.scss'

interface ButtonLargeProps {
	onClick: () => void
	text: string
}

const ButtonLarge: React.FC<ButtonLargeProps> = ({ onClick, text }) => {
	return (
		<div className={styles.buttonLarge} onClick={onClick}>
			<p>{text}</p>
		</div>
	)
}

export default ButtonLarge