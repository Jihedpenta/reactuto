import React from 'react'
import Task from './Task'   
function Tasks({tasks, onDelete, onToggle, onAddTask}) {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                // <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
