import logo from './images/logo4.png'
import icon from './images/icon.png'
import './Landing_sidebar.css'
function Landing_sidebar(){
    return(
        <>
          <div className="blockquote text-warning" style={{fontFamily:"lucida handwriting"}}>  
            <h1 className="text-light"style={{fontFamily:"cursive"}} ><img className="landinglogo" src={icon}/>ScreenSaga</h1>
            <p >Welcome to Screen Saga,At Screen Saga, you don't just watch movies—you experience them.</p>
            <p> Start your cinematic journey with us today. Your saga begins here.</p>
          </div>
        </>
    )
}
export default Landing_sidebar;