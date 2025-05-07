import styles from './About.module.css'
import profileImage from '../../assets/images/profile.png'

const About = () => {
    return (
        <div className={styles.aboutContainer} id="about">

            <section className={styles.about}>
                <div className={styles.aboutImage}>
                    <img src={profileImage} alt="Felipe Mendez" />
                    <p className={styles.aboutTitle}>Fullstack Developer</p>
                </div>
                <div className={styles.aboutMe}>
                    <h2 className={styles.aboutMeTitle}>Sobre mí</h2>
                    <p className={styles.aboutDescription}>
                    Soy una persona amable, empática y respetuosa, siempre dispuesto a ayudar a los demás. 
                    Me apasiona aprender constantemente y asumir nuevos retos, especialmente en el mundo 
                    de la programación, donde disfruto resolviendo problemas y desarrollando soluciones creativas. 
                    Me caracterizo por ser responsable, comprometido y tener una gran dedicación en todo lo que hago.
                    Valoro el trabajo bien hecho y me motiva crecer tanto personal como profesionalmente cada día.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
