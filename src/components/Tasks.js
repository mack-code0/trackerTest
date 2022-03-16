import Task from './Task'

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
    // State is Immutable
    // setTasks([...tasks, {id: 4, text: "Fourth text", day: "Jan 4th at 2pm", reminder: false}])
    return (
        <>
            {
                tasks.map(task => (
                    <Task toggleReminder={toggleReminder} onDelete={onDelete} key={task.id} task={task} />
                ))
            }
        </>
    )
}

export default Tasks