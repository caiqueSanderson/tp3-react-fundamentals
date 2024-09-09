import "./Greeting.css";

export default function Greeting(props){
    return(
        <div className="greeting">
            <h1>Olá, {props.name}</h1>
        </div>
    )
}