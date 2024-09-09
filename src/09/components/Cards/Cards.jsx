import styles from "./styles.module.css";

export default function Card(props){
    return(
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
        </div>
    )
}