import { useContext, useEffect, useState } from "react";
import { userobjcontext } from "./Landing";
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
function Watchlistdisplay({ watchlistdata, setwatchlist,removewatchlist }) {
    const{userobj}=useContext(userobjcontext);
    const [watchlistcontent, setWatchListContent] = useState();
    console.log("length of watchlist data ", watchlistdata.length)
    useEffect(() => {
        setWatchListContent(watchlistdata);
    })
    let txt="";
    if(watchlistdata.length>0){
        watchlistdata.map((movie)=>{
          txt+=movie.movie_name;
        })
        console.log(txt);
    }
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-between my-3">
                    <h3 >Your Watch List</h3>
                    
                </div>
                {

                    watchlistdata.length!==0?watchlistdata.map((movie) => {
                        console.log(watchlistdata);
                        
                            return <div className="card text-bg-dark float-start col-md-6" tyle={{ width: "200px", minHeight: "200px", maxHeight: "200px" }}>
                                <div className="card-title" style={{ height: "50px", alignContent: "center", textAlign: "center" }}>{movie.movie_name}</div>
                                <img src={movie.movie_image} />
                                <div className="card-body p-0">
                                    <div className=" d-grid " >
                                        <div className="btn text-light" style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}}>Watch Now <PlayCircleFilledIcon style={{ marginBottom: "2px" }} /></div>
                                        <div className="btn text-bg-danger" onClick={(e) => { removewatchlist(e, movie.movie_name, userobj.mail)}}>Remove <DeleteIcon sx={{ fontSize: "20px", marginBottom: "3px" }} /></div></div>
                                </div>
                            </div>
                        
                    }):<h2 className="text-danger">Your watchlist is empty</h2>
                
                }
            </div>
        
        </>
    )
}
export default Watchlistdisplay;