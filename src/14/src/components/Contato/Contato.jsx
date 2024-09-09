import styles from "./styles.module.css";

export default function Contato() {
    return (
        <>
            <div className={styles.container_contact}>
                <header className={styles.header_contact}>
                    <span className={styles.text_line}>Contatos</span>
                    <span className={styles.bold}>Redes Sociais e outros meios de contato</span>
                </header>
                <ul className={styles.list_contact}>
                    <li>
                        <a href="">e-mail</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </>
    )
}