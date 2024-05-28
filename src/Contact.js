import { useContext } from "react";
import { userobjcontext } from "./Landing";
function Contact(){
    const {userobj}=useContext(userobjcontext);
    return(
        <>
          <div className="container">
          <div className="row">
            <div className="col-md-3 col-1"></div>
            <div className="col-md-6 col-10">
            <h4 style={{textAlign:"center"}}>Reach Us</h4>
             <form>
             <div className="form-floating mb-3 mt-3">
             <input type="email" className="form-control" placeholder="Enter your mail" id="mail"value={userobj.mail} required readOnly/>
             <label className="form-label text-secondary" htmlFor="mail"><b>Email</b></label>
             </div>
             <div className="form-floating mb-3 mt-3">
              <textarea rows="3" cols="6" className="form-control" placeholder="Write Us" id="write"></textarea>
              <label htmlFor="write" className="form-labe">Write to us</label>
             </div>
             <div className="d-grid">
            <button type="submit" className="btn btn-success" style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}}>Submit</button>
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