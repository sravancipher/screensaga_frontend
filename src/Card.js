import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { userobjcontext } from './Landing';
import { useContext, useEffect, useState } from 'react';
import { watchlaterdbdata } from './Routings';
import Playingvideo from './Playingvideo';
import axios from 'axios';
import PlayMovie from './PlayMovie';
function Card({ image, name,playingmovie}) {
    const { addwatchlist, watchlistdata,removewatchlist } = useContext(watchlaterdbdata);
    const [watchlistcontent, setWatchListContent] = useState();
    const { userobj } = useContext(userobjcontext);
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
    const[video,setVideo]=useState(false);
    const[videoid,setVideoId]=useState();
    async function playtrailer(e,moviename){

        e.preventDefault();
        // const response = await fetch('/utubeurls_api.json');
        // const response=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${moviename} movie telugu%20trailer&type=video&key=AIzaSyDaIEeVUVuzz84Il7Yi1jar4Mz30J6A2KQ`)
        const options = {
            method: 'GET',
            url: 'https://youtube-data8.p.rapidapi.com/search/',
            params: {
              q: moviename+' Movie Telugu Trailer',
              hl: 'en',
              gl: 'US',
              type:'video',
              maxResults:1
            },
            headers: {
              'x-rapidapi-key': 'ba5ccfae70msh4602074d1f53caap1ac41ejsnbedbd6f0d7c8',
              'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              //console.log("videodata",response.data.items[0].id.videoId);
              console.log(response.data.contents);
              setVideoId(response.data.contents[0].video.videoId);
          } catch (error) {
              console.error(error);
          }
        
        // let i=0;
        // const data = await response.json();
        // const movie = data.movieurls.find(movie => movie.name === moviename);
        // console.log(movie.videoid);
        // console.log(movie.name);
        
        setVideo(true)
    }
    return (
        <>
           
            <div className='card border-0 bg-dark m-1 ' >
            {
                video?<Playingvideo videoid={videoid}/>:<img src={image} style={{ minHeight: "200px", maxHeight: "200px" }} />
              }
                
                <div >
                    <p className='text-light' style={{minHeight: "50px",maxHeight: "50px",textAlign:"center",alignContent:"end"}}>{name} </p>
                </div>
                <div className='d-grid gap-2 '>
                <div className='btn-group'>
                    <button className='btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid",fontSize:"15px"}} onClick={(e)=>{playtrailer(e,name)}}>Watch Trailer <PlayCircleFilledIcon style={{ marginBottom: "2px" }} /></button>
                    <button className='btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid",fontSize:"15px"}} onClick={()=>{playingmovie()}}>Watch Movie <PlayCircleFilledIcon style={{ marginBottom: "2px" }} /></button>
                    </div>
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