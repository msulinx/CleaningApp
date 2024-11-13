import React from 'react'
import TaskCard from './TaskCard'
import { useState } from 'react'

const TaskColumn = ({title, icon, tasks, room, handleDelete, toggleTaskCompleted }) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleShowColumn = () => {
      setIsVisible((prev) => !prev);
    };

  return (
    <div>
        <div className='column-heading'>
            <img className='heading-icon' src={icon}></img>
            <h2 onClick={toggleShowColumn}>{title}</h2>
         </div>


        {isVisible && (
        <div>
            {tasks.map (
            (task, index) => 
            task.room === room && (
            <TaskCard 
            key={index}
            task={task.task} 
            handleDelete={handleDelete} 
            index={index}
            toggleTaskCompleted={toggleTaskCompleted}
            />
        )
        )}
        </div>
      )}
    </div>
  )
}

export default TaskColumn
