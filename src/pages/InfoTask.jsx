import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import './Info.css'

const InfoTask = ({tasks}) => {

const navegate = useNavigate()

const addInfo = () =>{
   navegate(`/task/${id}/addinfo`)

}

const handleButtonBackClick = () =>{
    navegate(`/`)
}

const {id} = useParams()

    return (
        <div className="info-container">
       
        
           
            {tasks.map(task => 
                {if (task.id === id)return (

                <div key={task.id}>
                <h1>{task.title}</h1>
                <p>{task.info}</p>
    
                
                </div>
                
                
                
                )})}
            
             <div className="buttons-container">  <Button onClick={handleButtonBackClick}>Voltar</Button>
                     <Button onClick={addInfo}>Adicionar Info</Button> </div>
        </div>
        
        
        
    );
}
 
export default InfoTask;