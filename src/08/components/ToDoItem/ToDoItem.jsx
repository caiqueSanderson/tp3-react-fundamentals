import "./styles.css";
import { useState } from "react";

export default function ToDoItem(props) {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };
    
    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <span className="date">Data: Hoje</span>
            <span>Tarefa: {props.task}</span>
            <button onClick={toggleCompleted}>Concluído</button>
        </div>
    )
}