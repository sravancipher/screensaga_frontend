import axios from "axios";
import { useState } from "react";
function Changepswd({setforgotpassword}){
    const[pswddata,setPswdData]=useState("");
    const [user_mail,setMail]=useState("");
    const[pswdupdate,checkPswdUpdate]=useState(false);
    const [user_pswd,setPassword]=useState("");
    async function handleSignUp(e){
        
        e.preventDefault();
      let url=`http://192.168.1.2:8081/user/sendmail/${user_mail}`;
        let res=await axios.put(url,{
            
              header:{
                 'Content-Type':'application/json'
              }
           }
        )
      //   .then()
      //   .catch(err=>{console.log("error"+err)})
        console.log(res.data)
        if(res.data){
         checkPswdUpdate(true);
         setPswdData("An email notification regarding your password update has been sent to your registered email address")
         setTimeout(() => {
            setforgotpassword();
          }, 3000);
         }
            // else{
            //    setPswdData("Account with this mail is not exist")
            // //    checkLogin(true);
            //   }
          }
   
    return(
        <>
        <div className="container mt-5">
        <form onSubmit={handleSignUp} >
        <div className="form-floating mb-3 mt-3">
        <input type="email" className="form-control" placeholder="Enter your mail" id="mail"value={user_mail} required onChange={(e)=>{
            setMail(e.target.value)
         }}></input>
        <label className="form-label text-secondary" htmlFor="mail"><b>Email</b></label>
     </div>
                {
                  pswdupdate?<h5 class="text-success">{pswddata}</h5>:<h5 class="text-danger">{pswddata}</h5>
                 }
                 <span type="button" className="text-primary" onClick={()=>setforgotpassword()}>Sign In?</span>
            <div className="d-grid">
            <button type="submit" className="btn btn-danger">Update Password</button>
            </div>
          </form>
          </div>
        </>
    )
}
export default Changepswd;