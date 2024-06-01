import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { watchlaterdbdata } from './Routings';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import { userobjcontext } from './Landing';
import PlayMovie from './PlayMovie';
function Watch_the_latest({ name, image,ht,t ,playingmovie}) {
    // const[playmovie,setPlayMovie]=useState(false);
    // function playingmovie(){
    //     setPlayMovie(!playmovie);
        
    // }
    
    return (
        <>
                <div className='card mb-4 border-0' >
                <img className="card-img-bottom " src={image} style={{ height:ht,objectFit:"cover" }} />
                <div className='card-img-overlay mt-sm-5' style={{ top:t }}>
                    <p className='card-title text-light'>{name}</p>
                    
                        <button className='btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}} onClick={()=>{playingmovie()}}>Watch Now <PlayCircleFilledIcon/></button>
                    
                </div>
            </div>
            
        </>
    )
}
export default Watch_the_latest;