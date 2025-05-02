import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Designed and developed by Felipe Mendez</p>
            <div>
                <a href="">Linkedin</a>
                <a href="">Github</a>
                <a href="mailto:feliantonio.santiago@gmail.com">Email</a>
            </div>
        </footer>
    )
}

export default Footer
