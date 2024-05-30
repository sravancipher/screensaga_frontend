function PlayMovie({playingmovie}){
    return(
        <>
         <div className="bg-dark " style={{width:"100%",height:"100vh"}}>
          <div className="text-center">
           <h1 className="text-light" style={{fontFamily:"cursive"}}>Sorry,We can't play the movie right now</h1>
          <button className="btn btn-danger m-5 px-5" onClick={()=>{playingmovie()}}>Go Back</button>
          </div>
         </div>

        </>
    )
}
export default PlayMovie;