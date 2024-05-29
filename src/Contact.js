import { useContext, useState } from "react";
import { userobjcontext } from "./Landing";
import axios from "axios";
function Contact(){
    const {userobj}=useContext(userobjcontext);
    const[comment,setComment]=useState("");
    async function addcomment(e){
      e.preventDefault();
      axios.post(`https://screensagadb.up.railway.app/user/addcomment` ,{
        usermail: userobj.mail,
        usercomment: comment
     }, {
        header: {
           'Content-Type': 'application/json'
        }
     })
     .then(res=>{
      if(res.data){
        alert("Your submission has been successfully received")
      }
     })
    }
    return(
        <>
        <h3 className="bg-danger p-1 " style={{textAlign:"center",borderRadius:"6px"}}>Reach Us</h3>
          <div className="container">
          <div className="row">

            <div className="col-md-3 col-1"></div>
            <div className="col-md-6 col-10">
            
             <form onSubmit={addcomment} method="post">
             <div className="form-floating mb-3 mt-3">
             <input type="email" className="form-control" placeholder="Enter your mail" id="mail" value={userobj.mail} required readOnly/>
             <label className="form-label text-secondary" htmlFor="mail"><b>Email</b></label>
             </div>
             <div className="form-floating mb-3 mt-3">
              <textarea rows="6" cols="6" className="form-control text-dark" placeholder="Write Us" id="write" required value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
              <label htmlFor="write" className="form-labe text-dark">Write to us</label>
             </div>
             <div className="d-grid">
            <button type="submit" className="btn btn-success contact" style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}}>Submit</button>
            </div>
             </form>
            </div>
            <div className="col-md-3 col-1"></div>
          </div>
          </div>
        </>
    )
}
export default Contact;