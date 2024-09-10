import styles from "./styles.module.css";

export default function List(props) {
    return (
        <div>
            {props.numbers.length > 0 ? (
                <ul>
                    {props.numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            ) : (
                <div className={styles.cardMessage}>
                    <p>A lista está vazia</p>
                </div>
                
            )}
        </div>
    )
}