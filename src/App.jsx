import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'
import InfoTask from './pages/InfoTask'
import FormInfo from './pages/FormInfo'


import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'



const App = () => {

  const [tasks , setTasks] = useState([
    {id:'1',
     title:'programar',
     info: 'to aprendendo aos poucos aaaa',
     completed : true
    
    }
    ,
    {id:'2',
     title:'estudar',
     info:'tenho que estudar aaaaa',
     completed : false
    
    },
  ])

  const handleTaskAddicion= (taskTitle) => {
    const newTask = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false ,
    },]

    setTasks(newTask)
  }

  const handleTaskClick = (taskid) => {
    const newtask = tasks.map(task=>
      {if(task.id === taskid)return {...task,completed:!task.completed}
      

      return(task)
    })

    setTasks(newtask)
  }

  const handleTaskDelete = (taskid) => {
    const newtask = tasks.filter(task=> task.id !== taskid)

     setTasks(newtask)
  }

  const handleTaskInfo = (taskid, taskinfo) => {
    const newtask = tasks.map(task=>
      {if(task.id === taskid)return {...task,info:taskinfo}
      

      return(task)
    })

    setTasks(newtask)

  }



  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
      <AddTask handleTaskAddicion={handleTaskAddicion} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} 
      handleTaskDelete={handleTaskDelete}/>
      </>
    },
    {
      path: '/task/:id',
      element:<InfoTask tasks={tasks} />
    },
    {
      path:'/task/:id/addinfo',
      element:<FormInfo handleTaskInfo={handleTaskInfo}/>
    }
  ])



  return (
   
    <div className='container'>
    <Header />
    <RouterProvider router={router} />
   
    </div>
  )
  }

export default App
