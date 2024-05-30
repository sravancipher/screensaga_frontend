function Playingvideo({videoid}){
    let videourl="https://www.youtube.com/embed/"+videoid
    return(
        <>
         <div className="" stye={{minHeight: "300px", maxHeight: "300px"}}>
         <iframe src={videourl} allowFullScreen></iframe>
         </div>
        </>
    )
}
export default Playingvideo;