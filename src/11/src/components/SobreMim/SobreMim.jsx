import styles from "./styles.module.css";

export default function SobreMim() {
    return (
        <div className={styles.container}>
            <header className={styles.header_about}>
                <span className={styles.text_line}>Sobre mim</span>
                <span className={styles.bold}>Apresentação</span>
            </header>
            <div className={styles.container_about}>
                <img src="src/11/assets/image.jpg" alt="imagem" />
                <div className={styles.description}>
                    <p>Sou estudante do 3° semestre de Engenharia de Software no Instituto Infnet, se você quiser saber mais sobre minha grade, <a className={styles.description_link} href="https://faculdadeinfnet.com.br/faculdade/engenharia-de-software/">clique aqui</a>.<br></br>
                        Nestes semestres além de aprender hard skills tenho desenvolvido minhas soft skills. Sendo meu foco atual o aprendizado do React</p>
                </div>
            </div>
        </div>
    )
}