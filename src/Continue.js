import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
function Continue({name,image,minh,maxh,top,btntext,playingmovie}) {
    return (
        <>
            <div className='card mb-1 border-0' >
                <img className="card-img-bottom" src={image} style={{minHeight:minh,maxHeight:maxh,objectFit:"cover"}}/>
                <div className='card-img-overlay mt-sm-5 mt-3'style={{ top:top }}>
                    <p className='card-title text-light'>{name}</p>
                    <div className='btn-grid w-100 '>
                        <button className='styledbtn btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}} onClick={()=>{playingmovie(name,image)}}>{btntext}<PlayCircleFilledIcon /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Continue;