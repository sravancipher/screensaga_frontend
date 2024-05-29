import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Routing.css'
import Home from './Home'
import Movies from './Movies'
import Webseries from './Webseries'
import Tv from './Tv'
import Userdropdown from './Userdropdown'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { userobjcontext } from './Landing'
import useApi from './useApi'
export const watchlaterdbdata = createContext();
function Routings() {
  const { userobj } = useContext(userobjcontext);
  // const [watchdata,setWatchData]=useState("");
  const [detectwatchlist, setDetectWatchList] = useState(false); //to make changes whenever the watchlist is changed
  const [watchlistdata, setWatchListData] = useState([]);  //to display in watch later list
  // const [removedmovie,setRemovedMovie] = useState();   
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);



  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  //for card component add to watch later functionality
  async function addwatchlist(e, movie_name, movie_image) {

    // setWatchListData([])
    e.preventDefault();

    // const new_movie={name:movie_name,image:movie_image};
    // setWatchListData((previtems)=>[...previtems,new_movie])
    // console.log("data added to db",watchlistdata)
    // await axios.post("https://screensagadb.up.railway.app/user/addwatchlist",{
    await axios.post("https://screensagadb.up.railway.app/user/addwatchlist", {
      user_mail: userobj.mail,
      movie_name: movie_name,
      movie_image: movie_image,
    }, {
      header: {
        'Content-Type': 'application/json'
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
  useEffect(() => {
    getwatchlist()
  }, [detectwatchlist])
  async function getwatchlist() {
    await axios.get(`https://screensagadb.up.railway.app/user/getwatchlist/${userobj.mail}`, {
      header: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => {
      console.log("in then response", res.data);
      setWatchListData(res.data);
      console.log("data added to db", watchlistdata);
    })

  }
  async function removewatchlist(e, movie, mail) {
    e.preventDefault();
    let res = await axios.delete(`https://screensagadb.up.railway.app/user/deletewatchlist/${mail}/${movie}`);
    // setRemovedMovie(res.data);
    setDetectWatchList(!detectwatchlist)
    // console.log("deleted data",removedmovie);
  }
  const [movies_series, setMoviesSeries] = useState();
  function moviesseries(data) {
    setMoviesSeries(data);
  }
  return (
    <>
      <BrowserRouter>
        <Menubar watchlistdata={watchlistdata} removewatchlist={removewatchlist} movies_series={movies_series} />
        <watchlaterdbdata.Provider value={{ watchlistdata, addwatchlist, removewatchlist, showScrollTop, scrollToTop, moviesseries }}>
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/webseries' element={<Webseries />}></Route>
            <Route path='/tv' element={<Tv />}></Route>

          </Routes>
        </watchlaterdbdata.Provider>
      </BrowserRouter>

    </>
  )
}

function Menubar({ watchlistdata, removewatchlist, movies_series }) {
  const [input, setInput] = useState();
  const [searchinput, setSearchInput] = useState("");
  const [opdata, setOpData] = useState();

  function searchfn(e) {
    setSearchInput(e.target.value);
    e.preventDefault();
    if (e.target.value.toLowerCase().length == 0) {
      setOpData("");
    }
    else if (movies_series.toLowerCase().includes((e.target.value.toLowerCase()))) {

      setOpData("Movie Available");
      setInput(true);
    }
    else {
      setOpData("Movie not available");
      setInput(false);
    }



  }

  return (
    <>
      <div className='d-flex'>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark flex-grow-1" style={{ borderBottom: "none" }}>
          <div className="container-fluid ">
            <a className="navbar-brand   text-light " style={{ fontFamily: "lucida handwriting" }}>ScreenSaga</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#moviemenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="moviemenu">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item ">
                  <Link to="/" className="nav-link  text-light">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/webseries">Web Series</Link>
                </li>
              </ul>

              <form >
                <input className="form-control me-2 bg-light d-sm-block d-none" type="text" placeholder="Check For Availability" value={searchinput} onChange={(e) => { searchfn(e) }} />
                {input ? <div class="d-flex justify-content-center"><h5 class="mt-2 text-success" style={{ position: "absolute" }}>{opdata}</h5> </div>: <div class="d-flex justify-content-center"><h5 class="mt-2 text-danger" style={{ position: "absolute" }}>{opdata}</h5></div>}
              </form>
            </div>
          </div>
        </nav>
        <Userdropdown watchlistdata={watchlistdata} removewatchlist={removewatchlist} />
      </div>

      <div className="row justify-content-center bg-dark" >
        <div className="col-md-12 col-10">
          <input className=" form-control me-2 bg-light d-sm-none d-block " type="text" placeholder="Check For Availability" value={searchinput} onChange={(e) => { searchfn(e) }} />
        </div>
      </div>
      {input ? <div class="d-flex justify-content-center d-sm-none d-block"><h5 class="text-success p-2" style={{ position: "absolute" }}>{opdata}</h5></div> : <div class="d-flex justify-content-center d-sm-none d-block"><h5 class="text-danger p-2" style={{ position: "absolute" }}>{opdata}</h5></div>}

    </>
  )
}

export default Routings;