import styles from "./Greeting.css";

export default function Greeting(props){
    return(
        <div>
            <h1>Olá, {props.name}</h1>
        </div>
    )
}