function TaskComponent() {
    let myTasks = [
        { id: 1, task: "Study"}, 
        { id: 2, task: "Eat"}, 
        { id: 3, task: "Exercise"}, 
        { id: 4, task: "Play Games"}, 
        { id: 5, task: "Sleep"}];
    return (
        <>
            <ul style={{ listStyleType: 'none' }}>
                {myTasks.map( task => (
                    <li key={task.id}>- {task.task}</li>
                ))}
            </ul>
            <h3>Here is a random task to do: {myTasks[Math.floor( Math.random() * myTasks.length)].task}</h3>
        </>
    )
}

export default TaskComponent