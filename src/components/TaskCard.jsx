import './TaskModules.css'

const TaskCard = ({task}) => {
    
    return (
        
        <div className="teskCard-container">
          {task.title}
        </div>
        
      );
}
 
export default TaskCard;