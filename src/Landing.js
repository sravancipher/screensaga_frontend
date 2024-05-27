
import { createContext, useState } from "react";
import Routings from "./Routings"
import Landingpage from "./Landingpage";
import { BrowserRouter, Routes,Route, Outlet, useParams } from "react-router-dom";
export const homecontext=createContext();
export const userobjcontext=createContext();
function Landing() {
    const[home,setHome]=useState(false);
    const[userobj,setUserObj]=useState({mail:"",password:""})
    function sethome(mail,password){
        setUserObj({mail:mail,password:password});
        setHome(!home)
    }
    function sethome1(){
        setHome(!home)
    }
    return (
        <>  {
            home?<userobjcontext.Provider value={{userobj,sethome1}}><Routings/></userobjcontext.Provider>:<homecontext.Provider value={sethome}><Landingpage/></homecontext.Provider>
        }    
        </>
    )
}
export default Landing