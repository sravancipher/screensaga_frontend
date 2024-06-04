import './PlayingVideo.css'
function Playingvideo({videoid}){
    // let videourl="https://www.youtube.com/embed/NgBoMJy386M"+videoid
    // let videourl="https://www.youtube.com/watch?v="+videoid
     let videourl="https://www.youtube.com/embed/"+videoid
    // let videourl="https://www.youtube.com/embed/"+videoid
    return(
        <>
         <div >
         <iframe className="trailerframe"src={videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; " width="100%" allowFullScreen ></iframe>
         </div>
        </>
    )
}
export default Playingvideo;