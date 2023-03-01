import './Info.css'
import Button from '../components/Button';
import { useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';





const FormInfo = ({handleTaskInfo}) => {

    const {id} = useParams()   
    const [getinfo, setGetInfo] = useState('')
    const navigate = useNavigate()
    
    const handleButtonBackClick = () =>{
        navigate(`/task/${id}`)
    }


    const setHandle = () =>{
        if(getinfo.length >0){
        alert('Task Adicionada com Sucesso!')
        handleTaskInfo(id, getinfo)
        setGetInfo('')

        }
        
    }
    return ( 
        <div className="form-container">
        <div >
        <input type='text' value={getinfo} placeholder="Preencha aqui a info da tarefa" onChange={(e)=>setGetInfo(e.target.value)} />
        <Button onClick={setHandle}>Adicionar</Button>
        </div>
        <Button onClick={handleButtonBackClick}>Voltar</Button>
        </div>
     );
}
 
export default FormInfo;