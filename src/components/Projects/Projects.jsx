import styles from './Projects.module.css'
import { FaGithub } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const Projects = () => {
    return (
        <>
            <section className={styles.projectsContainer} id="projects">
                <h2 className={styles.projectsContainerTitle}>Proyectos</h2>
                <ul className={styles.projects}>
                    <li className={styles.projectItem}>
                        <p className={styles.projectTitle}>Proyecto 1</p>
                        <p className={styles.projectDescription}>Descripción del proyecto 1</p>
                        <div className={styles.projectLinks}>
                            <a href="https://github.com/usuario/proyecto1" className={styles.projectLink}>
                                <FaGithub className={styles.icon} />
                                GitHub
                            </a>
                            <a href="https://proyecto1.com" className={styles.projectLink}>
                                <FaEye className={styles.icon} />
                                Ver proyecto
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Projects
