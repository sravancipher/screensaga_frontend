function Playingvideo({videoid}){
    // let videourl="https://www.youtube.com/embed/NgBoMJy386M"+videoid
    // let videourl="https://www.youtube.com/watch?v="+videoid
     let videourl="https://www.youtube.com/embed/"+videoid
    // let videourl="https://www.youtube.com/embed/"+videoid
    return(
        <>
         <div className="" >
         <iframe src={videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; " width="100%" allowFullScreen style={{minHeight: "190px", maxHeight: "190px"}}></iframe>
         </div>
        </>
    )
}
export default Playingvideo;