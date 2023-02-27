import React from 'react'
import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [tasks , setTasks] = useState([
    {id:'1',
     title:'programar',
     completed : true
    
    }
    ,
    {id:'2',
     title:'estudar',
     completed : false
    
    },
  ])

  const handleTaskAddicion= (taskTitle) => {
    const newTask = [... tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false ,
    },]

    setTasks(newTask)
  }


  return (
    <div className='container'>
    <AddTask handleTaskAddicion={handleTaskAddicion}/>
    <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
