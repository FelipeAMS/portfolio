import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contactContainer} id="contact">
            <h2 className={styles.contactTitle}>Contacto</h2>
            <form className={styles.contactForm}>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Mensaje" />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact
