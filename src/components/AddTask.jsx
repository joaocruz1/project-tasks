
import './TaskModules.css'
import { useState } from 'react';
import Button from './Button';

const AddTask = ({handleTaskAddicion}) => {

    const [datatask, setDataTask] = useState("")
    const [taskNotInserted, setTaskNotInserted] = useState(false)

    const handleInputTask = (e) => {
        setDataTask(e.target.value)
        setTaskNotInserted(false)
    }
   
    const handleAddTaskClick = () =>{
        if (datatask.length > 0){
            handleTaskAddicion(datatask)
            setDataTask('')}
            setTaskNotInserted(false)
            

        if (datatask.length === 0 ){    
            setTaskNotInserted(true)
            
        }
    }


    return ( 
        <div className="addTask-container">
        <input type='text' placeholder='Preencha aqui para adicionar uma tarefa' value={datatask} onChange={handleInputTask} style={taskNotInserted ? {border:'1px solid red'}:{}} />
        <div className="add-task-button">
            <Button onClick={handleAddTaskClick} >Adicionar</Button>
        </div>
        
        </div>

     );
}
 
export default AddTask;