import Signup from "./Signup"
import Background_image from "./Background_Image"
import Landing_sidebar from "./Landing_sidebar"

function Landingpage(){
    
    return(
        <>
        <Background_image/>
            <div className="container">  
                <div className="row" style={{position:"relative",top:"150px" }}>
                    <div className="col-md-6"><Landing_sidebar/></div>
                    <div className="col-md-6"><Signup/></div>
                </div>

            </div>
            
        </>
    
    )
    
}
export default Landingpage;