import React, { useState } from 'react'
import Select from 'react-select'

const TaskForm = ({ tasks, setTasks, completedTaskCount }) => {

    const [taskData, setTaskData] = useState({
        task: '',
        room: 'todo',
        done: 'false'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: '',
            room: 'todo'
        })
    };

  return (
    <div>
        <header id='header'>
            <h1 className='title'>Städ App</h1>
            </header>
            <div className='task-count'>
                <p className='count-text'>Sysslor gjorda</p>
            <p className='count-number'>{completedTaskCount} / {tasks.length} </p>
        </div>
        <div className='addchore-container'>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            className='add-task'
            placeholder='Lägg till en syssla'
            onChange={handleChange}
            name='task'
            value={taskData.task}/>

            <div className='task-bottom-line'>
                <select className='select-room' 
                onChange={handleChange} 
                name='room'
                value={taskData.room}>
                    <option value='entrance'>Hall</option>
                    <option value='kitchen'>Kök</option>
                    <option value='bathroom'>Badrum</option>
                    <option value='livingroom'>Vardagsrum</option>
                    <option value='bedroom'>Sovrum</option>
                </select>
                <button type='submit' className='add-task-button'>Lägg till</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default TaskForm
