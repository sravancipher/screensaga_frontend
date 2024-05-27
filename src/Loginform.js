import {useContext, useEffect, useState} from 'react'
import {homecontext} from './Landing.js'
import axios from 'axios'
import Changepswd from './Changepswd.js';

function Loginform({changetosignup}){
   const[forgotpswd,setForgotPassword]=useState(false);
   function setforgotpassword(){
      setForgotPassword(!forgotpswd)
   }
   const[login,checkLogin]=useState(false);
   const[logindata,setLoginData]=useState("");
    let homefn=useContext(homecontext);
    const [user_mail,setMail]=useState("");
    const [user_pswd,setPassword]=useState("");
    async function handleSignUp(e){
        e.preventDefault();
      let url=`https://screensagadb.up.railway.app/user/login/${user_mail}/${user_pswd}`;
        let res=await axios.get(url,{
            
              header:{
                 'Content-Type':'application/json'
              }
           }
        )
      // .then(res=>{console.log("RESPONSE"+res.data)})
      // .catch(err=>{console.log("error"+err)})
        console.log(res.data);
        if(res.data){
         checkLogin(false);
         setLoginData("Login Successful")
         setTimeout(() => {
            homefn(user_mail,user_pswd)
          }, 3000);
         }
            else{
               setLoginData("Invalid username or password")
               checkLogin(true);
              }
          }
      

    return(
        <>
        {
         forgotpswd?<Changepswd setforgotpassword={setforgotpassword}/>:<form onSubmit={handleSignUp}>
        <div className="form-floating mb-3 mt-3">
        <input type="email" className="form-control" placeholder="Enter your mail" id="mail"value={user_mail} required onChange={(e)=>{
            setMail(e.target.value)
         }}></input>
        <label className="form-label text-secondary" htmlFor="mail"><b>Email</b></label>
     </div>
            <div className="form-floating mb-3 mt-3">
               <input type="password" className="form-control" placeholder="Create Password" id="pswd" value={user_pswd} required onChange={(e)=>{
                setPassword(e.target.value)
             }}></input>
               <label className="form-label text-secondary" htmlFor="pswd"><b>Enter Password</b></label>
            </div>
            <div>
                 <p className="text-light">New to ScreenSaga? <span type="button" className="text-primary" onClick={()=>changetosignup()}>Sign Up</span><span type="button" className='text-primary float-end' onClick={()=>{setforgotpassword()}}>Forgot Password?</span></p>
                 
                </div>
                {
                  login?<h5 class="text-danger">{logindata}</h5>:<h5 class="text-success">{logindata}</h5>
                 }
            <div className="d-grid">
            <button type="submit" className="btn btn-danger">Login</button>
            </div>
          </form>
         }  
        </>
    )
}
export default Loginform;