import './Home.css'
import manjummel from './images/manjummel.avif'
import polimera2 from './images/polimera2.jpg'
import rrr from './images/rrr.jpg'
import avesham from './images/avesham.jpg'
import premalu from './images/premalu.jpg'
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import More from './More';
import Continue from './Continue';
import useApi from './useApi';
import { getting2movies } from './getting2movies';
import Contact from './Contact';
import { watchlaterdbdata } from './Routings';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PlayMovie from './PlayMovie';
import { userobjcontext } from './Landing';
import axios from 'axios';
function Movies(){
    const{userobj}=useContext(userobjcontext)
    const {watchdata,showScrollTop,scrollToTop} = useContext(watchlaterdbdata);
    const [more1,setMore1]=useState(false);
    const [more2,setMore2]=useState(false);
    function setless1(){
        setMore1(false);
    }
    function setless2(){
        setMore2(false);
    }
    const url1="https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te";
    const url2="https://api.themoviedb.org/3/movie/now_playing?&api_key=bcf371704c5b5986177c0d72527ae0a6&language=en-US&page=1";
    let list1=useApi(url1);
    let list2=useApi(url2);
    list1=list1.slice(11,15);
    list2=list2.slice(15,19);
    const[playmovie,setPlayMovie]=useState(false);
    const[continuelist,setContinueList]=useState();
    const[continuewatch,setContinueWatch]=useState(false);
    function playingmovie(name,image){
        console.log("called");
        setPlayMovie(!playmovie);
        axios.post("https://screensagadb.up.railway.app/user/addcontinuewatch",{
            user_mail:userobj.mail,
            video_type:"movie",
            movie_name:name,
            movie_image:image
        })
    }    
    useEffect(()=>{
        getcontinuewatchlist();
    },[continuewatch,continuelist,playmovie])
    async function getcontinuewatchlist(){
        const video_type="movie";
        await axios.get(`https://screensagadb.up.railway.app/user/getcontinuewatch/${userobj.mail}/${video_type}`)
        .then((res)=>{
            if(res.data!==''){
                console.log("result",res)
                console.log("continuewatclistdata",res.data);
                setContinueList({name:res.data.movie_name,image:res.data.movie_image})
                console.log("continuelistadat in variable",continuelist)
                setContinueWatch(true);
            }
            else{
                setContinueWatch(false);
            }
            
            
        }        
        );
    }
    function stopplayingmovie(){ 
        setPlayMovie(!playmovie);
        
    }
    return(
        <>
        {
            playmovie?<PlayMovie stopplayingmovie={stopplayingmovie} />:<div className='bg-dark py-4 text-light' >
            <div className='container'>
                <div className='row' style={{marginLeft:"0",marginRight:"0"}}>
                    <div className='col-md-6 text-light'>
                    {
                        continuewatch?<><div style={{marginBottom:"25px"}}><p className='text-light' >Popular Watching</p>
                        <Continue name="Manjummel Boys" image={manjummel} minh="150px" maxh="150px" key="3" btntext="Watch Now" playingmovie={playingmovie}/>
                        </div>
                        <Continue  name={continuelist.name} image={continuelist.image} minh="150px" maxh="150px" key="4" btntext="Continue Watching" playingmovie={playingmovie}/></>
                        :<><p className='text-light' >Popular Watching</p>
                        <Continue name="Manjummel Boys" image={manjummel} minh="325px" maxh="325px" top="180px" key="3" btntext="Continue Watching" playingmovie={playingmovie}/></>
                    }
                    
                    </div>

                    <div className='col-md-6'>
                        <p className='text-light' >Watch the Latest</p>
                        <Watch_the_latest playingmovie={playingmovie} name="Aavesham" image={avesham} key ="1" ht="150px" t="10px"/>
                        <Watch_the_latest playingmovie={playingmovie} name="Premalu" image={premalu} key ="2" ht="150px" t="10px"/>
                    </div>
                </div>
            </div>
            <div className='row m-4'>
               <h4>Telugu</h4>
               {
                more1?<More fn={setless1} playingmovie={playingmovie} url1={url1} url2={""}/>:<>
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
               <h4>English</h4>
               {
                more2?<More playingmovie={playingmovie} fn={setless2} url1={""} url2={url2}/>:<>{
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