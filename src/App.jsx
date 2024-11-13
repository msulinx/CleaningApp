import { useEffect, useState } from 'react'
import './App.css'
import TaskColumn from './assets/compontents/TaskColumn'
import TaskForm from './assets/compontents/TaskForm'
import EntranceIcon from './assets/icons/entrance.svg'
import KitchenIcon from './assets/icons/kitchen.svg'
import BathroomIcon from './assets/icons/bathroom.svg'
import LivingroomIcon from './assets/icons/livingroom.svg'
import BedroomIcon from './assets/icons/bedroom.svg'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect (() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect (() => {
    const tasks = JSON.parse(localStorage.getItem('key: tasks'))
  })

  const toggleTaskCompleted = () => {
        setTasks((prevTasks) =>
        prevTasks.map((task)  =>
          tasks === tasks ? {...task, completed: !task.completed} : task
      )
    );
  };

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTask)
  };

  const completedTaskCount = tasks.filter ((task) => task.completed).length;

  return (
    <div id='app'>
      <TaskForm 
      tasks={tasks}
      setTasks={setTasks}
      completedTaskCount={completedTaskCount}
      />
      <main className='app-main'>

      <div id='entrance' className='room'>
          <TaskColumn 
          icon={EntranceIcon}
          title='Hall' 
          tasks={tasks} 
          room='entrance'
          handleDelete={handleDelete}/>
        </div>

        <div id='kitchen' className='room'>
          <TaskColumn 
          icon={KitchenIcon}
          title='Kök' 
          tasks={tasks} 
          room='kitchen'
          handleDelete={handleDelete}
          toggleTaskCompleted={toggleTaskCompleted}/>
        </div>

        <div id='bathroom' className='room'>
          <TaskColumn 
          icon={BathroomIcon}
          title='Badrum' 
          tasks={tasks} 
          room='bathroom'
          handleDelete={handleDelete}/>
        </div>

        <div id='livingroom' className='room'>
          <TaskColumn 
          icon={LivingroomIcon}
          title='Vardagsrum' 
          tasks={tasks} 
          room='livingroom'
          handleDelete={handleDelete}/>
        </div>

        <div id='bedroom' className='room'>
          <TaskColumn 
          icon={BedroomIcon}
          title='Sovrum' 
          tasks={tasks} 
          room='bedroom'
          handleDelete={handleDelete}/>
        </div>
      </main>
    </div>
  )
}

export default App
