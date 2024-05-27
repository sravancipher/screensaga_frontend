import './Signup.css'
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react'
import Loginform from './Loginform.js'
import axios from 'axios'
function Signupform({ changetologin }) {
   const [signup, checkSignUp] = useState(false);
   const [signupdata, setSignUpData] = useState("");
   // const [login, redirectLogin] = useState(true);
   const [name, setName] = useState("");
   const [mail, setMail] = useState("");
   const [password, setPassword] = useState("");
   async function handleSignUp(e) {
      e.preventDefault();
      let res = await axios.post("http://192.168.1.2:8081/user/signup", {
         user_name: name,
         user_mail: mail,
         user_pswd: password
      }, {
         header: {
            'Content-Type': 'application/json'
         }
      }
      )
      // .then(res=>{console.log("RESPONSE",res)})
      // .catch(err=>{console.log("ERROR"+err)})
      console.log(res.data)
      if (res.data) {
         checkSignUp(false);
         setSignUpData("Sign Up Succesfull, you will be redirected to the login page")
         setTimeout(() => {
            changetologin();
         }, 3000);

      } else {
         setSignUpData("An account with this email already exists. Please log in.")
         checkSignUp(true);
      }

   }
   return (
      <>
         
         <form onSubmit={handleSignUp}>
               <div className="form-floating mb-3 mt-3 ">
                  <input type="text" className="form-control" placeholder="Enter your name" id="name" name="user_name" value={name} required onChange={(e) => {
                     setName(e.target.value)
                  }}></input>
                  <label className="form-label text-secondary " htmlFor="name"><b>Username</b></label>
               </div>
               <div className="form-floating mb-3 mt-3">
                  <input type="email" className="form-control" placeholder="Enter your mail" id="mail" name="user_mail" value={mail} required onChange={(e) => {
                     setMail(e.target.value)
                  }}></input>
                  <label className="form-label text-secondary" htmlFor="mail"><b>Email</b></label>
               </div>
               <div className="form-floating mb-3 mt-3">
                  <input type="password" className="form-control" placeholder="Create Password" id="pswd" name="user_pswd" value={password} required onChange={(e) => {
                     setPassword(e.target.value)
                  }}></input>
                  <label className="form-label text-secondary" htmlFor="pswd"><b>Create Password</b></label>
               </div>
               <div>
                  <p className="text-light">If you already have an account <span type="button" className="text-primary" onClick={() => changetologin()}>Sign In</span></p>
               </div>
               {
                  signup?<h5 class="text-danger">{signupdata}</h5>:<h5 class="text-success">{signupdata}</h5>
                  
               }
               <div className="d-grid">
                  <button type="submit" className="btn btn-danger" >Sign Up</button>
               </div>
            </form> 
         
            
      </>
   )
}
export default Signupform;