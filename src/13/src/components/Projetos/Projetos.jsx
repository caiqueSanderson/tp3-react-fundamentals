import styles from "./styles.module.css";

export default function Projetos(props) {
    return (
        <div className={styles.container_project}>
            <header className={styles.header_project}>
                <span className={styles.text_line}>Projetos</span>
                <span className={styles.bold}>{props.title}</span>
            </header>
            <p>{props.description}</p>
        </div>
    )
}