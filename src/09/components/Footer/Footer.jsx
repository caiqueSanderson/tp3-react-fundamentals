import styles from "./styles.module.css"

export default function Footer(){
    return(
        <div className={styles.footer}>
            <h2>Contate-nos</h2>
            <p>0800-021-21-21</p>
            <p>Segunda a sexta-feira: das 9h às 18h</p>
            <p className={styles.copyright}>&copy; Todos os direitos reservados</p>
        </div>
    )
}