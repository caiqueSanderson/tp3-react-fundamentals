import "./styles.css";

export default function ToDoItem(props) {
    return(
        <div className="task">
            <span className="date">Data: Hoje</span>
            <span>Tarefa: {props.task}</span>
        </div>
    )
}