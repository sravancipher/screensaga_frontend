import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Playingvideo from './Playingvideo';
import { useState } from 'react';
import axios from 'axios';

function Trailer({name,image}) {
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
              console.log(response.data.contents);
              setVideoId(response.data.contents[0].video.videoId);
          } catch (error) {
              console.error(error);
          }
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
                        <button className='styledbtn btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}} onClick={(e)=>{playtrailer(e,name)}}>Watch Now<PlayCircleFilledIcon /></button>
                    </div>
                </div></>
            }
                
                
            </div>
        </>
    )
}
export default Trailer;