import ToDoList from "./components/ToDoList";
import { useState } from "react"

export default function App() {
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

    function onTaskUpdate(oldTask, newTask) {
        const updatedTasks = props.tasks.map((task) => 
            task === oldTask ? newTask : task
        );
        props.onTaskUpdate(updatedTasks); 
    }

    function onTaskDelete(taskToDelete) {
        const newTasks = formData.task.filter((t) => t !== taskToDelete);
        setFormData({
            ...formData,
            task: newTasks,
        });
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

            <ToDoList tasks={formData.task} onTaskDelete={onTaskDelete} onTaskUpdate={onTaskUpdate}/>
        </div>
    )
}