import styles from "./styles.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.headerLogo}
                src="https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg"
                alt="Logo"
            />
            <span className={styles.headerTitle}>
                Header
            </span>
        </header>
    )
}