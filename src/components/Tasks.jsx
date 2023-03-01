import TaskCard from "./TaskCard"


const Tasks= ({tasks,handleTaskClick,handleTaskDelete}) => {

    
    return(
        
        <div>
            {tasks.map((task => <TaskCard task={task} key={task.id} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />))}
        </div>
    )
}

export default Tasks