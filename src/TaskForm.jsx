import { useState } from "react";

function TaskForm() {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task:", task);
    };
    return (
        <>
            <p>Enter Task Name</p>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />   
            <button onClick={handleSubmit}>Add Task</button>
            <p>(Clicking the button logs the task to the console)</p>
        </>
    )
}

export default TaskForm