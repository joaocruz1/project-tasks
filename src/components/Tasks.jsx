import TaskCard from "./TaskCard"


const Tasks= ({tasks}) => {

    
    return(
        
        <div>
            {tasks.map((task => <TaskCard task={task} key={task.id} />))}
        </div>
    )
}

export default Tasks