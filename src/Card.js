import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { userobjcontext } from './Landing';
import { useContext, useEffect, useState } from 'react';
import { watchlaterdbdata } from './Routings';
import useRemoveApi from './useRemoveApi';
function Card({ image, name, key }) {
    const { addwatchlist, watchlistdata,removewatchlist } = useContext(watchlaterdbdata);
    const [watchlistcontent, setWatchListContent] = useState();
    
    const { userobj } = useContext(userobjcontext);
    // const[watchlistmoviesstring,setWatchListMoviesString]=useState("");
    console.log("length", watchlistdata.length)
    useEffect(() => {
        setWatchListContent(watchlistdata);
    })
    let moviestring = "";
    if (watchlistdata.length > 0) {
        watchlistdata.map((movie) => {
            moviestring += movie.movie_name;
        })
        console.log(moviestring);
    }
    
    return (
        <>
            <div className='card border-0 bg-dark m-1 ' >
                <img src={image} style={{ minHeight: "200px", maxHeight: "200px" }} />
                <div >
                    <p className='text-light mx-2' style={{minHeight: "50px",maxHeight: "50px",textAlign:"center",alignContent:"end"}}>{name} </p>
                </div>
                <div className='d-grid gap-2 '>
                    <button className='btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}}>Watch Now <PlayCircleFilledIcon style={{ marginBottom: "2px" }} /></button>
                    {
                        moviestring.includes(name) ? <button className='btn btn-danger' onClick={(e) => { removewatchlist(e, name, userobj.mail) }}>Remove From Watch Later <DeleteIcon sx={{ fontSize: "20px", marginBottom: "3px" }} /></button>
                            : <button className='btn btn-success' onClick={(e)=>addwatchlist(e,name,image)}>Add To Watch Later <AddCircleIcon sx={{ fontSize: "20px", marginBottom: "4px" }} /></button>
                    }


                </div>
            </div>

        </>
    )
}
export default Card;