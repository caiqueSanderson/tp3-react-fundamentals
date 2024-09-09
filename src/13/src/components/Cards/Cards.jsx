import "./Cards.css";

export default function Tools(props){
    return(
        <div className="skills">
            <img className="card_image" src={props.image} alt={props.title} />
            <p className="card_title">{props.title}</p>
        </div>
    )
}