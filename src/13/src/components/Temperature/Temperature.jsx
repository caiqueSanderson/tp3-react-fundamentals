import styles from "./styles.module.css";

export default function Temperature(props) {
    return (
        <div className={styles.text}>
            {props.answer > 25 ? (
                <p>Está quente!</p>
            ) : (
               <p>Está frio!</p>
            )}
        </div>
    )
}