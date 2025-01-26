import React from 'react'
import styles from './TextImage.module.scss'
import { TextImageProps } from '../../types/TextImageProps';

const TextImage: React.FC<TextImageProps> = ({ imageUrl, imagePosition, texts, title, highlightFirstWord }) => {

	const highlightFirstWordFn = (text: string) => {
		const words = text.split(' ');
		if (words.length > 0) {
			words[0] = `<b>${words[0]}</b>`;
		}
		return words.join(' ');
	};

	return (
		<div className={styles.sectionContainer}>
            <div className={styles.image} style={{ order: imagePosition === 'right' ? 3 : 1 }}>
                <img src={imageUrl} alt='image' />
            </div>
			<div className={styles.text}>
				<h2>{title}</h2>	
				{texts.map((text, index) => {
					const highlightedText = index === 0 && highlightFirstWord ? highlightFirstWordFn(text) : text;
					return (
						<div key={index}>
							<p dangerouslySetInnerHTML={{ __html: highlightedText }} />
							<br />
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default TextImage
