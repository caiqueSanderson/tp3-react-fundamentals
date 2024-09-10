import ToDoItem from "./ToDoItem/ToDoItem"
import { useState } from "react"

import "./styles.css";

export default function ToDoList() {
    const [task, setTask] = useState("");
    const [formData, setFormData] = useState({
        date: "hoje",
        task: [],
    });

    function saveTask(e) {
        e.preventDefault();

        if (task.trim()) {
            const newTasks = [...formData.task, task];
            setFormData({
                ...formData,
                task: newTasks,
            });
            setTask("");
        }
    }

    return (
        <div>
            <form className="form-task" action="" onSubmit={saveTask}>
                <input
                    placeholder="Adicionar tarefa"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Salvar</button>
            </form>
            <ToDoItem task="TP1" />
            <div>
                {formData.task.map((taskData, index) => (
                    <ToDoItem key={index} task={taskData} /> 
                ))}
            </div>

        </div>
    )
}