import './Home.css'
import sexeducation from './images/sexeducation.png';
import strangerthings from './images/strangerthings.jpg';
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import useApi from './useApi';
import More from './More';
import Continue from './Continue';
import dark from './images/dark.jpg'
import Contact from './Contact';
import { watchlaterdbdata } from './Routings';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PlayMovie from './PlayMovie';
import { userobjcontext } from './Landing';
import axios from 'axios';
import PlayWebseries from './PlayWebseries';
import Footer from './Footer';
function Webseries() {
    const{userobj}=useContext(userobjcontext);
    const {watchdata,showScrollTop,scrollToTop} = useContext(watchlaterdbdata);
    const [more1, setMore1] = useState(false);
    const [more2, setMore2] = useState(false);
    const url1="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6";
    const url2="https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6";
    
    let airing_today = useApi(url1);
    let ontheair = useApi(url2);
    airing_today = airing_today.slice(0, 4);
    ontheair = ontheair.slice(10,14);
    function setless1() {
        setMore1(false);
    }
    function setless2() {
        setMore2(false);
    }
    const[playwebseries,setPlayWebseries]=useState(false);
    const[continuelist,setContinueList]=useState();
    const[continuewatch,setContinueWatch]=useState(false);
    const [name,setName]=useState();
    const [image,setImage]=useState();
    function playingmovie(name,image){
        setName(name);
        setImage(image);
        setPlayWebseries(!playwebseries);
        axios.post("https://screensagadb.up.railway.app/user/addcontinuewatch",{
            user_mail:userobj.mail,
            video_type:"webseries",
            movie_name:name,
            movie_image:image
        })
        .then(()=>{
            // setContinueList([{name:name,image:image}]);
            // console.log("continue list",continuelist)
        }        
        );
        
    }    
    useEffect(()=>{
        getcontinuewatchlist();
    },[continuewatch,continuelist,playwebseries])
    async function getcontinuewatchlist(){
        const video_type="webseries";
        await axios.get(`https://screensagadb.up.railway.app/user/getcontinuewatch/${userobj.mail}/${video_type}`)
        .then((res)=>{
            // setContinueList([{name:name,image:image}]);
            // console.log("continue list",continuelist)
            // setContinueWatch(true);
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
        setPlayWebseries(!playwebseries);
        
    }
    return (
        <>
        {
            playwebseries?<PlayWebseries stopplayingmovie={stopplayingmovie} name={name} image={image}/>:<div className='bg-dark py-4 text-light' >
            <div className='container'>
                <div className='row' style={{ marginLeft: "0", marginRight: "0" }}>
                    <div className='col-md-6 text-light'>
                    {
                        continuewatch?<><div style={{marginBottom:"25px"}}><p className='text-light' >Popular Watching</p>
                        <Continue name="Dark" image={dark} minh="150px" maxh="150px" key="3" btntext="Watch Now" playingmovie={playingmovie}/>
                        </div>
                        <Continue  name={continuelist.name} image={continuelist.image} minh="150px" maxh="150px" key="3" btntext="Continue Watching" playingmovie={playingmovie}/></>
                        :<><p className='text-light' >Popular Watching</p>
                        <Continue name="Dark" image={dark} minh="325px" maxh="325px" top="180px" key="3" btntext="Continue Watching" playingmovie={playingmovie}/></>
                    }
                    </div>

                    <div className='col-md-6'>
                        <p className='text-light' >Watch the Latest</p>
                        <Watch_the_latest playingmovie={playingmovie} name="Sex Education" image={sexeducation} key="2" ht="150px" t="10px" />
                        <Watch_the_latest playingmovie={playingmovie} name="Stranger Things" image={strangerthings} key="3" ht="150px" t="10px" />
                    </div>
                </div>
            </div>
            <div className='row m-4'>
                <h4>Airing Today</h4>
                {
                    more1 ? <More fn={setless1} playingmovie={playingmovie} url1={url1} url2={""}/> : <>
                        {
                            airing_today.map(({ original_name, backdrop_path, id }) => {
                                let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                return <div className='col-md-3'><Card image={image}  playingmovie={playingmovie}name={original_name} key={id} /></div>
                            })
                        }
                        <div className='row'><p className='btn text-primary float-end' style={{ textAlign: "end" }} onClick={() => setMore1(true)}>See More?</p></div></>
                }
            </div>
            <div className='row m-4'>
                <h4>On The Air</h4>
                {
                    more2 ? <More playingmovie={playingmovie} fn={setless2} url1={""} url2={url2} /> : <>
                        {
                            ontheair.map(({ original_name, backdrop_path, id }) => {
                                let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                return <div className='col-md-3'><Card playingmovie={playingmovie} image={image} name={original_name} key={id} /></div>
                            })
                        }
                        <div className='row'><p className='btn text-primary float-end' style={{ textAlign: "end" }} onClick={() => setMore2(true)}>See More?</p></div></>
                }
            </div>
            <Contact/>
            {showScrollTop && (
                <span  type="button" className="text-danger" onClick={scrollToTop} style={{position:"fixed",bottom:"0",right:"0"}}>
                <ArrowCircleUpIcon sx={{fontSize:"40px"}}/>
                </span>
              )}
              <Footer/>
        </div>
        }
        </>
    )
}
export default Webseries;