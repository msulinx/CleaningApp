import React from 'react'
import DeleteIcon from '../icons/trashIcon.svg'

const TaskCard = ({ task, handleDelete, index, toggleTaskCompleted }) => {

  return (
    <div>
        <section className='todo-list'>

            <label className='checkbox'>
            <input
                type='checkbox'
                checked={task.completed}
                onChange={toggleTaskCompleted}/>
            </label>

            <p className='tasks-text'>{task}</p>
            <img src={DeleteIcon} onClick={() => handleDelete(index)} className='delete-task-button'/>
        </section>
      <div className='task-card-bottom-line'>
      </div>
      </div>
  )
}

export default TaskCard
