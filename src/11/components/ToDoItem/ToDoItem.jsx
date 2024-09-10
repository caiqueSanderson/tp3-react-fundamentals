import "./styles.css";
import { useState } from "react";

export default function ToDoItem(props) {

    const [completed, setCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(props.task);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleEditChange = (e) => {
        setEditedTask(e.target.value);
    };

    const saveTaskEdit = () => {
        props.onTaskUpdate(props.task, editedTask);
        setIsEditing(false);
    };

    const deleteTask = () => {
        props.onTaskDelete(props.task);
    };



    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <span className="date">Data: Hoje</span>
            {isEditing ? (
                <input
                    type="text"
                    value={editedTask}
                    onChange={handleEditChange}
                    onBlur={saveTaskEdit}
                />
            ) : (
                <span>Tarefa: {props.task}</span>
            )}
            <button onClick={toggleCompleted}>Concluído</button>
            <button onClick={toggleEditMode}> {isEditing ? "Cancelar" : "Editar"}</button>
            <button onClick={deleteTask}>Excluir</button>
        </div>
    )
}