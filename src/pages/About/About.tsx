import React from 'react'
import styles from './About.module.scss'

const About: React.FC = () => {
	return (
		<div className={styles.about}>
			<div className={styles.sectionContainer}>
				<div className={styles.text}>
					<p>
						En mi trabajo investigo diversas disciplinas como la fotografía, el textil y
						las ilustraciones para dar cuenta de los procesos naturales, la transformación
						vegetal y el valor de la memoria resguardada en los oficios ancestrales.
						<br></br>
						<br></br> En mi práctica utilizo colores que extraigo del interior de las
						plantas y frutos, los utilizo tanto para teñir como para realizar copias
						fotográficas. Abordo cada investigación como un proceso lento y artesanal,
						dando lugar a lo que cada planta y tinte proponga.<br></br>
						<br></br> A partir del medio fotográfico exploro la síntesis, los detalles y la
						poética sutil de la naturaleza. Mis obras son una exploración onírica de los
						espacios naturales, espacios que invitan a la contemplación y a la conexión
						profunda con lo que nos rodea.
					</p>
				</div>
				<div className={styles.image}>
					<img src='/images/statement.jpg' alt='about' />
				</div>
			</div>
			<div className={styles.sectionContainer}>
				<div className={styles.image}>
					<img src='/images/bio.jpg' alt='about' />
				</div>
				<div className={styles.text}>
					<h2>BIO</h2>
					<p>
						Natalia Rocca (Buenos Aires, 1975) <br></br>
                        Se interesó por los oficios manuales desde
						una temprana edad. Su recorrido profesional ha sido variado, trabajó veinte
						años en publicidad y cine, especialmente en las áreas de producción y
						vestuario, se formó en joyería y cincelado en la Escuela de la Joya ¨Sergio
						Luquez” y partició en talleres con distintos maestros joyeros. A lo largo de
						este camino también asistió a cursos de fotografía, laboratorio fotográfico,
						ilustración infantil y cestería textil. <br></br><br></br>
                        Desde hace diez años trabaja en el
						ámbito textil, fue creadora de la marca FRUTO, donde realizó objetos con fibras
						y tintes naturales. Este último tiempo ha incorporado la fotografía a su
						producción artística para llevar a cabo una práctica transdisciplinaria entre
						la imágen y los soportes donde se representan. <br></br><br></br>                        
                        Su proyecto más reciente es una
						serie de antotípias del valle que la rodea, creadas a partir de tintes y
						plantas de Traslasierra, Córdoba.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
