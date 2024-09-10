import "./styles.css";
import { useState } from "react";

export default function ToDoItem(props) {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    const deleteTask = () => {
        props.onTaskDelete(props.task); 
    };

    
    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <span className="date">Data: Hoje</span>
            <span>Tarefa: {props.task}</span>
            <button onClick={toggleCompleted}>Concluído</button>
            <button onClick={deleteTask}>Excluir</button>
        </div>
    )
}