import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import'./Routing.css'
import Home from './Home'
import Movies from './Movies'
import Webseries from './Webseries'
import Tv from './Tv'
import Sports from './Sports'
import Userdropdown from './Userdropdown'
import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userobjcontext } from './Landing'
export const watchlaterdbdata=createContext();
function Routings(){
  const {userobj}=useContext(userobjcontext);
  // const [watchdata,setWatchData]=useState("");
  const[detectwatchlist,setDetectWatchList]=useState(false);
  const[watchlistdata,setWatchListData]=useState([]);  //to display in watch later list
  const [removedmovie,setRemovedMovie] = useState();
  //for card component add to watch later functionality
  async function addwatchlist(e,movie_name,movie_image){
    
    // setWatchListData([])
    e.preventDefault();
    
    // const new_movie={name:movie_name,image:movie_image};
    // setWatchListData((previtems)=>[...previtems,new_movie])
    // console.log("data added to db",watchlistdata)
    // await axios.post("https://screensagadb.up.railway.app/user/addwatchlist",{
      await axios.post("https://screensagadb.up.railway.app/user/addwatchlist",{
       user_mail:userobj.mail,
       movie_name:movie_name,
       movie_image:movie_image,
  },{
          header:{
             'Content-Type':'application/json'
          }
       }
    )
    //  setTimeout(()=>{
      setDetectWatchList(!detectwatchlist)
    //  },3000);
     
    // .catch(err=>{console.log("error"+err)})
    // console.log(res.data)
      
       console.log("added successfully")
       
  }
    useEffect(()=>{
        getwatchlist()
    },[detectwatchlist])
    async function getwatchlist(){
      await axios.get(`https://screensagadb.up.railway.app/user/getwatchlist/${userobj.mail}`,{
              header:{
                 'Content-Type':'application/json'
              }
           }
        ).then(res=>{console.log("in then response",res.data);
        setWatchListData(res.data);
        console.log("data added to db",watchlistdata);
        }) 
        
    }
    async function removewatchlist(e, movie, mail) {
      e.preventDefault();
      let res = await axios.delete(`https://screensagadb.up.railway.app/user/deletewatchlist/${mail}/${movie}`);
        setRemovedMovie(res.data);
        setDetectWatchList(!detectwatchlist)
      console.log("deleted data",removedmovie);
  }
    return(
        <>
         <BrowserRouter>
         <Menubar watchlistdata={watchlistdata} removewatchlist={removewatchlist}/>
         <watchlaterdbdata.Provider value={{watchlistdata,addwatchlist,removewatchlist}}>
          <Routes>
          
          <Route exact path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/webseries' element={<Webseries/>}></Route>
          <Route path='/tv' element={<Tv/>}></Route>
          
          </Routes>  
          </watchlaterdbdata.Provider>
         </BrowserRouter>
         
        </>
    )
}

function Menubar({watchlistdata,removewatchlist}){
  
    return(
        <>
        <div className='d-flex'>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark flex-grow-1" style={{borderBottom: "none"}}>
        <div className="container-fluid ">
          <a className="navbar-brand   text-light " href="/" style={{fontFamily:"lucida handwriting"}}>ScreenSaga</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-controls="mynavbar" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto ">
            <li className="nav-item ">
                <Link to ="/" className="nav-link  text-light">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-light" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-light " to="/webseries">Web Series</Link>
              </li>
            </ul>
            
            <form >
              <input className="form-control me-2 bg-light " type="text" placeholder="Search"/>
            </form>
            
            
          </div>
          
        </div>
        
      </nav>
      <Userdropdown watchlistdata={watchlistdata} removewatchlist={removewatchlist}/>
      </div>
        </>
    )
}

export default Routings;