import styles from "./styles.module.css";

export default function ProfileCard(props) {
    return (
        <div className={styles.text}>
            <p>{props.name}</p>
            {props.ageBoolean ? (
                <p>{props.age}</p>
            ) : (
               <p>Idade não disponível</p>
            )}
        </div>
    )
}