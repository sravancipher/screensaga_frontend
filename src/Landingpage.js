import Signup from "./Signup"
import Background_image from "./Background_Image"
import Landing_sidebar from "./Landing_sidebar"
import './LandingPage.css'

function Landingpage(){
    
    return(
        <>
        <Background_image/>
            <div className="container">  
                <div className="row landingdisplay" style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="col-md-6"><Landing_sidebar/></div>
                    <div className="col-md-6"><Signup/></div>
                </div>

            </div>
            
        </>
    
    )
    
}
export default Landingpage;