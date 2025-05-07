import styles from  './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}><a className={styles.navbarLink} href="#about">Sobre mí</a></li>
        <li className={styles.navbarItem}><a className={styles.navbarLink} href="#education">Educacion</a></li>
        <li className={styles.navbarItem}><a className={styles.navbarLink} href="#experience">Experiencia</a></li>
        <li className={styles.navbarItem}><a className={styles.navbarLink} href="#projects">Proyectos</a></li>
        <li className={styles.navbarItem}><a className={styles.navbarLink} href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}   

export default Navbar