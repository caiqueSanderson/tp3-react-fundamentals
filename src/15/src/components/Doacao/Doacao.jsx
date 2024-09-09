import styles from "./styles.module.css";

export default function Doacao() {
    return (
        <div className={styles.container_donation}>
            <header className={styles.header_donation}>
                <span className={styles.text_line}>Beneficiência</span>
                <span className={styles.bold}>Doação</span>
            </header>
            <div>
                <p>Gostou de algum projetos e quer contribuir?</p>
                <p>Pague um cafezinho aqui</p>
                <a href="#">Coffee</a>
            </div>
        </div>
    )
}