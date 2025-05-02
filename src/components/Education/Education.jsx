import styles from './Education.module.css'
import digitalHouse from '../../assets/images/dh.jpg'
const Education = () => {
    return (
        <section className={styles.educationContainer} id="education">
            <h2 className={styles.educationContainerTitle}>Educación</h2>
            <ul className={styles.education}>
                <li className={styles.educationItem}>
                    <img src={digitalHouse} className={styles.educationImage} alt="Digital House" />
                    <p className={styles.educationTitle}>Digital House</p>
                    <p className={styles.educationSubtitle}>Programación Web Full Stack</p>
                    <p className={styles.educationDate}>2022 - 2023</p>
                </li>
            </ul>
        </section>
    )
}

export default Education
