
import './Button.css'


const Button = ({children, onClick}) => {

    
    return ( 
        <button class="button" onClick={onClick}>
            {children}
        </button>
     );
}
 
export default Button;