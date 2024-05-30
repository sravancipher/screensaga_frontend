import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Playingvideo from './Playingvideo';
import { useState } from 'react';
function Trailer({name,image}) {
    const[video,setVideo]=useState(false);
    const[videoid,setVideoId]=useState();
    async function playtrailer(e,moviename){
        e.preventDefault();
        const response = await fetch('/utubeurls_api.json');
        const data = await response.json();
        const movie = data.movieurls.find(movie => movie.name === moviename);
        console.log(movie.videoid);
        console.log(movie.name);
        setVideoId(movie.videoid);
        setVideo(true)
    }
    
    return (
        <>
            <div className='card mb-1 border-0 ratio ratio-21x9' style={{objectFit:"scale-down"}}>
            {
                video?<div className='bg-dark'><Playingvideo videoid={videoid}/></div>:<><img className="card-img-bottom " src={image} />
                <div className='card-img-overlay mt-sm-5' >
                    <p className='card-title text-light' style={{marginTop:"58px"}}>{name}</p>
                    <div className='btn-grid w-100 '>
                        <button className='styledbtn btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}} onClick={(e)=>{playtrailer(e,name)}}>Watch Now <PlayCircleFilledIcon /></button>
                    </div>
                </div></>
            }
                
                
            </div>
        </>
    )
}
export default Trailer;