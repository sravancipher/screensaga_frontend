import './Home.css'
import manjummel from './images/manjummel.avif'
import polimera2 from './images/polimera2.jpg'
import rrr from './images/rrr.jpg'
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useContext, useState } from 'react';
import More from './More';
import Continue from './Continue';
import useApi from './useApi';
import { getting2movies } from './getting2movies';
import Contact from './Contact';
import { watchlaterdbdata } from './Routings';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PlayMovie from './PlayMovie';
function Movies(){
    const {watchdata,showScrollTop,scrollToTop} = useContext(watchlaterdbdata);
    const [more1,setMore1]=useState(false);
    const [more2,setMore2]=useState(false);
    function setless1(){
        setMore1(false);
    }
    function setless2(){
        setMore2(false);}
    let list1=useApi("https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te");
    let list2=useApi("https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te");
    let twomovies=getting2movies(list1);
    list1=list1.slice(11,15);
    list2=list2.slice(15,19);
    const[playmovie,setPlayMovie]=useState(false);
    function playingmovie(){
        setPlayMovie(!playmovie);
    }
    
    return(
        <>
        {
            playmovie?<PlayMovie playingmovie={playingmovie}/>:<div className='bg-dark py-4 text-light' >
            <div className='container'>
                <div className='row' style={{marginLeft:"0",marginRight:"0"}}>
                    <div className='col-md-6 text-light'>
                    <p className='text-light' >Continue Watching</p>
                        <Continue name="Manjummel Boys" image={manjummel} key="3"/>
                    </div>

                    <div className='col-md-6'>
                        <p className='text-light' >Watch the Latest</p>
                        <Watch_the_latest name={twomovies[0]} image={twomovies[2]} key ="1" ht="150px" t="10px"/>
                        <Watch_the_latest name={twomovies[1]} image={twomovies[3]} key ="2" ht="150px" t="10px"/>
                    </div>
                </div>
            </div>
            <div className='row m-4'>
               <h4>ScreenSaga Recommended</h4>
               {
                more1?<More fn={setless1} playingmovie={playingmovie} url="https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te"/>:<>
                {
                    list1.map(({title,backdrop_path,id})=>{
                        let image='https://image.tmdb.org/t/p/original'+backdrop_path;
                        return <div className='col-md-3'><Card playingmovie={playingmovie} image={image} name={title} key={id}/></div>
                       })
                   }
                <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>setMore1(true)}>See More?</p></div></>
               }
               </div>
               <div className='row'>
               
               </div>
               <div className='row m-4'>
               <h4>ScreenSaga Latest</h4>
               {
                more2?<More playingmovie={playingmovie} fn={setless2} url="https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te"/>:<>{
                    list2.map(({title,backdrop_path,id})=>{
                        let image='https://image.tmdb.org/t/p/original'+backdrop_path;
                        return <div className='col-md-3'><Card playingmovie={playingmovie} image={image} name={title} key={id}/></div>
                       })
                   }
                <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>setMore2(true)}>See More?</p></div></>
               }
               </div>
               <Contact/>
               {showScrollTop && (
                <span  type="button" className="text-danger" onClick={scrollToTop} style={{position:"fixed",bottom:"0",right:"0"}}>
                <ArrowCircleUpIcon sx={{fontSize:"40px"}}/>
                </span>
              )}
        </div>
        }
        
        </>
    )
}
export default Movies;