import { useContext, useState } from "react";
import { userobjcontext } from "./Landing";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Userdropdown.css'
import Watchlistdisplay from "./Watchlistdisplay";
import Downloaddisplay from "./Downloaddisplay";
function Userdropdown({ watchlistdata, removewatchlist }) {
  const { sethome1, userobj } = useContext(userobjcontext);
  const [watchlist, setWatchList] = useState();
  const [download, setDownload] = useState();
  const [watchbtn, setWatchBtn] = useState(false);
  const [downloadbtn, setDownloadBtn] = useState(false);
  const[btnhighlight,setBtnHighlight]=useState(0);
  function setdownload() {
    setDownloadBtn(!downloadbtn)
    setDownload(true);
    setWatchList(false)
    setBtnHighlight(1);
  }
  function setwatchlist() {
    setWatchBtn(!watchbtn)
    setWatchList(true);
    setDownload(false);
    setBtnHighlight(2);
  }
  const username = userobj.mail.slice(0, -10)
  // async function getwatchlist(e){
  //   e.preventDefault();
  //   setWatchBtn(!watchbtn);
  //   setWatchList(true);
  //   let res=await axios.get(`http://localhost:8081/user/getwatchlist/${userobj.mail}`,{
  //         header:{
  //            'Content-Type':'application/json'
  //         }
  //      }
  //   )
  //   // console.log("results from userdropdown component"+res.data[0].id)
  //   // .then(homefn())
  //   // .catch(err=>{console.log("error"+err)})

  //     if(res.data){
  //       let resobj=res.data;
  //       resobj.map((movie)=>{
  //         const new_movie={name:movie.movie_name,image:movie.movie_image};
  //         setWatchListData((previtems)=>[...previtems,new_movie])
  //       })
  //       console.log(res.data)

  //     }else{
  //      console.log("failed");
  //      setWatchListData((previtems)=>[...previtems,{err:"Your watch list contains no items"}]);

  //     }

  // }
  return (
    <>
      <span className="user bg-dark pt-2 " style={{ color: "orangered" }} data-bs-toggle="offcanvas" data-bs-target="#useroffcanvas"><AccountCircleIcon sx={{ fontSize: "40px" }} /></span>
      <div class="offcanvas offcanvas-end text-bg-dark" id="useroffcanvas" >

        <div class="offcanvas-header">
          <h3 class="offcanvas-title">Hello, {username}</h3>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body" >
          <hr className="offcanvas-divider" />

          <div className="btn mx-1 text-white" style={{ backgroundColor:btnhighlight==1 && "transparent",border:btnhighlight==1 && "2px solid white"}  } onClick={() => { setdownload() }}>Downloads</div>
          <button className="btn text-white" style={{ backgroundColor:btnhighlight==2 && "transparent",border:btnhighlight==2 && "2px solid white" }} onClick={() => { setwatchlist() }}>Watch List</button>
          <hr className="offcanvas-divider" />
          <button class="btn text-light" style={{ backgroundColor: "red" }} type="button" onClick={() => { sethome1() }}>Sign out</button>
          {watchlist &&<Watchlistdisplay watchlistdata={watchlistdata} setwatchlist={setwatchlist} removewatchlist={removewatchlist} />}
          {download && <Downloaddisplay setdownload={setdownload}/>}
          
        </div>
      </div>
      
    </>
  )
}
export default Userdropdown;
// onClick={(e)=>{getwatchlist(e)}}