import './TaskModules.css'
import {BsInfoCircleFill} from 'react-icons/bs'
import {CgClose} from 'react-icons/cg'
import {Link} from 'react-router-dom'

const TaskCard = ({task,handleTaskClick,handleTaskDelete}) => {
    
    return (
        
        <div className="teskCard-container" style={task.completed ? {borderLeft:'6px solid chartreuse'}:{}}>
          <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
            {task.title}
            
          </div>
          <div className='icons-container'>

          <Link to={`/task/${task.id}`}><BsInfoCircleFill color='#fff' onClick={()=>{}} /></Link>

          <a><CgClose color='chartreuse' onClick={()=>handleTaskDelete(task.id)}/></a>
          </div>
          
        </div>
        
      );
}
 
export default TaskCard;