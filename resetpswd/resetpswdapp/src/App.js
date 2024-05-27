import { useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [mail,setMail]=useState();
  const[password,setPassword]=useState();
  async function resetpswd(){
    axios.put( `https://screensagadb.up.railway.app/user/updatepassword/${mail}/${password}`)
    .then(response => {
        console.log('Success:', response.data);
        if(response.data){
            
            alert('Password Updated Successfully. Login Again');
            // setTimeout(()=>{},3000)
        }
        else{
            alert("The email address provided does not correspond to an existing account")
            // setTimeout(()=>{},3000)
        }
    })
    
    .catch(error => {
        console.error("error is occured",error);
        alert('An error occurred while sending the reset link.');
        // setTimeout(()=>{},3000)
    });
    }
    


  return (
    <div className="App">
    <div className="row">
    <div className='col-md-3 col-1'></div>
    <div className='col-md-6 col-10'>
      <h1 className="text-light" style={{textAlign: "center"}}>Reset Password</h1>
      <form method="post" onSubmit={resetpswd}>
        <div className="form-floating mb-3 mt-3">
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
          <label for="email" className="text-dark">Enter Email</label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input type="password" className="form-control " id="pwd" placeholder="Reset Password" name="pswd" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <label for="pwd" className="text-dark">Reset Password</label>
        </div>
        <div className="d-grid">
        <button className="btn btn-danger">Reset Password</button>
      </div>
      </form>
      </div>
      <div className='col-md-3 col-1'></div>
    </div>
    </div>
      
  );
}

export default App;
