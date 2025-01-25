import React from 'react'
import styles from './CesteriaTextil.module.scss'
import ImageStrip from '../../components/ImageStrip/ImageStrip'
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge'

const imagesCesteriaTextil = [
	'/images/cesteria1.jpg',
	'/images/cesteria2.jpg',
	'/images/cesteria3.jpg',
	'/images/cesteria4.jpg',
]

const textosCesteriaTextil = ['cuerpo', 'trama', 'cuenco', 'ensayos']

const CesteriaTextil: React.FC = () => {
	return (
		<div className={styles.cesteriaTextil}>
			<div className={styles.sectionContainer}>
				<ImageStrip images={imagesCesteriaTextil} titles={textosCesteriaTextil} />
				<div className={styles.text}>
                    <p>Exploración de materiales, formas, y técnicas de cestería / tejido</p>
                    <br />
                    <p>Meterse en un mantra textil, en un gesto repetido y dejarse llevar</p>
                    <p>Que las manos tejan y sigan su destino, se equivoquen y vuelvan a retomar lo hecho.</p>
                    <p>Hacer algo: útil / inútil - concreto / poético. Propio.</p>

                </div>
                <div className={styles.buttons}>
                    <ButtonLarge 
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/files/pdfprueba.pdf';
                            link.download = 'cesteria_textil_catalogo.pdf';
                            link.click();
                        }} 
                        text="Catálogo de cestería textil" 
                    />
                    <ButtonLarge onClick={() => {}} text="Cuenco - Talleres de cestería textil" />
                </div>
			</div>
		</div>
	)
}

export default CesteriaTextil
