
import './TaskModules.css'
import { useState } from 'react';
import Button from './Button';

const AddTask = ({handleTaskAddicion}) => {

    const [datatask, setDataTask] = useState()
    const handleInputTask = (e) => {
        setDataTask(e.target.value)
    }
   
    const handleAddTaskClick = () =>{
        handleTaskAddicion(datatask)
    }


    return ( 
        <div className="addTask-container">
        <input type='text' placeholder='Adicionar Task' value={datatask} onChange={handleInputTask} />
        <div className="add-task-button">
            <Button onClick={handleAddTaskClick} >Adicionar</Button>
        </div>
        
        </div>

     );
}
 
export default AddTask;