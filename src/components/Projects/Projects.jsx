import styles from './Projects.module.css'
import { FaGithub } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import rickAndMorty from '../../assets/images/rick-and-morty.png'

const Projects = () => {
    return (
        <>
            <section className={styles.projectsContainer} id="projects">
                <h2 className={styles.projectsContainerTitle}>Proyectos</h2>
                <ul className={styles.projects}>
                    <li className={styles.projectItem}>
                        <img src={rickAndMorty} alt="Rick and Morty" className={styles.projectImage} />
                        <p className={styles.projectTitle}>Rick and Morty</p>
                        <p className={styles.projectDescription}>Un proyecto donde puedes conocer varios personajes 
                            de la serie Rick and Morty</p>
                        <div className={styles.projectLinks}>
                            <a href="https://github.com/FelipeAMS/rick-and-morty" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.icon} />
                                GitHub
                            </a>
                            <a href="https://felipeams.github.io/rick-and-morty/" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
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
