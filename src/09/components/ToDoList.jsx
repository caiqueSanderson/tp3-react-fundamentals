import ToDoItem from "./ToDoItem/ToDoItem"

import "./styles.css";

export default function ToDoList(props) {
    return (
        <div>
            <ToDoItem task="TP1" />
            <div>
                {props.tasks.map((taskData, index) => (
                    <ToDoItem key={index} task={taskData} /> 
                ))}
            </div>

        </div>
    )
}