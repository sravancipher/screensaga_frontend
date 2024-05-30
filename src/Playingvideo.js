function Playingvideo({videoid}){
    // let videourl="https://www.youtube.com/embed/"+videoid
    let videourl="https://www.youtube.com/embed/"+videoid
    return(
        <>
         <div className="" >
         <iframe src={videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; " width="100%" allowFullScreen style={{minHeight: "195px", maxHeight: "195px"}}></iframe>
         </div>
        </>
    )
}
export default Playingvideo;