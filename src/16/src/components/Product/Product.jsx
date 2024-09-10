import styles from "./styles.module.css";

export default function Product(props) {
    return (
        <div className={styles.text}>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description || "Descrição não disponível"}</p>
        </div>
    )
}