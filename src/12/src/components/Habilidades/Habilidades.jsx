import styles from "./styles.module.css";

import Tools from "../Cards/Cards";

export default function Habilidades(){
    return(
        <>
        <div className={styles.container_tools}>
            <header className={styles.header_tools}>
                <span className={styles.text_line}>Hard Skills</span>
                <span className={styles.bold}>Ferramentas</span>
            </header>
            <div className={styles.cards_tools}>
                <img src="src/12/assets/javascript.svg" alt="" />
                <Tools image="src/12/assets/javascript.svg" title="JavaScript"/>
                <Tools image="src/11/assets/react.svg" title="React"/>
                <Tools image="src/11/assets/python.svg" title="Python"/>
                <Tools image="src/11/assets/sql.svg" title="SQL"/>
                <Tools image="src/11/assets/html.svg" title="HTML5"/>
                <Tools image="src/11/assets/css.svg" title="CSS3"/>
                <Tools image="src/11/assets/git.svg" title="Git"/>
            </div>
        </div>
        </>
    )
}