function Playingvideo({videoid}){
    // let videourl="https://www.youtube.com/embed/"+videoid
    let videourl="https://www.youtube.com/embed/"+videoid
    return(
        <>
         <div className="" stye={{minHeight: "300px", maxHeight: "300px"}}>
         <iframe src={videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; " allowFullScreen></iframe>
         </div>
        </>
    )
}
export default Playingvideo;