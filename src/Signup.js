import './Signup.css'
import {useState} from 'react'
import Signupform from './Signupform';
import Loginform from './Loginform';
function Signup(){
    const [login,setLogin]=useState(false);
    function setlogin(){
      setLogin(!login)
    }
    return (
        <>
         {
            login?<Loginform changetosignup={setlogin}/>:<Signupform changetologin={setlogin}/>  
         }
        </>
    )
     
}

export default Signup