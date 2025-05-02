import styles from './Experience.module.css'
import readyLatam from '../../assets/images/ready.png'

const Experience = () => {
    return (
        <section className={styles.experienceContainer} id="experience">
            <h2 className={styles.experienceContainerTitle}>Experiencia</h2>
            <ul className={styles.experience}>
                <li className={styles.experienceItem}>
                    <img src={readyLatam} alt="Ready Latam" className={styles.experienceImage} />
                    <p className={styles.experienceTitle}>Profesor de programación</p>
                    <p className={styles.experienceCompany}>Ready Latam</p>
                    <p className={styles.experienceDate}>2023 - 2025</p>
                </li>
            </ul>
        </section>
    )
}

export default Experience
