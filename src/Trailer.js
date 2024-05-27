import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
function Trailer({name,image}) {
    return (
        <>
            <div className='card mb-1 border-0 ratio ratio-21x9' style={{objectFit:"scale-down"}}>
                <img className="card-img-bottom " src={image} />
                <div className='card-img-overlay   ' >
                    <p className='card-title text-light' style={{marginTop:"70px"}}>{name}</p>
                    <div className='btn-grid w-100 '>
                        <button className='styledbtn btn text-light' style={{backgroundColor:"transparent",borderColor:"white",border:"2px solid"}}>Watch Now <PlayCircleFilledIcon /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Trailer;