import styles from "./styles.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coke-company-logo-black.svg" alt="Logo" />
            <ul className={styles.nav}>
                <li className={styles.list}>
                    <a href="#">Home</a>
                </li>
                <li className={styles.list}>
                    <a href="#">Quem Somos</a>
                </li>
                <li className={styles.list}>
                    <a href="#">Produtos</a>
                </li>
                <li className={styles.list}>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </div>
    )
}