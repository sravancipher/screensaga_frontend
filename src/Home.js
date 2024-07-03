import mirzapur from './images/mirzapur.jpg'
import './Home.css'
import Trailer from './Trailer';
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import More from './More';
import useApi from './useApi';
import { watchlaterdbdata } from './Routings';
import { getting2movies } from './getting2movies';
import Contact from './Contact';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PlayMovie from './PlayMovie';
import './Home.css'
import { userobjcontext } from './Landing';
import axios from 'axios';
import haromhara from './images/harom hara.jpg'
// import maname from './images/maname.webp'
import kalki from './images/kalki.jpg'
import Footer from './Footer';
function Home() {
    const {watchdata,showScrollTop,scrollToTop,moviesseries} = useContext(watchlaterdbdata);
    const{userobj}=useContext(userobjcontext);
    const [more1, setMore1] = useState(false);
    const [more2, setMore2] = useState(false);
    const url1="https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te";
    const url2="https://api.themoviedb.org/3/movie/now_playing?&api_key=bcf371704c5b5986177c0d72527ae0a6&language=en-US&page=1";
    const airing_todayurl="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6";
    const ontheairurl="https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6";
    let list1 = useApi(url1);
    let list2 = useApi(url2);
    let airing_today = useApi(airing_todayurl);
    let ontheair = useApi(ontheairurl);
    let movies_series;
    // list2.map((item)=>{
    //     movies_series+=item.title
    // })
    // airing_today.map((item)=>{
    //     movies_series+=item.original_name
    // })
    // ontheair.map((item)=>{
    //     if(item.id!=233952 || item.id!=91759 || item.id!=132544)
    //     movies_series+=item.original_name
    // })
    const combined=[...list1,...list2,...ontheair,...airing_today]
    combined.map((item)=>{
    let title=item.title;
    if("original_title" in item ){
        title=item.original_title;
    }
    movies_series+=title
})

  movies_series+="manjummel boysmirzapurdarkBahubali 2: The ConclusionSex EducationStranger ThingsAaveshamPremalu"
  moviesseries(movies_series);
    
    const list11 = list1.slice(0, 4);
    const list22 = list2.slice(5, 9);
    function setless1() {
        setMore1(false);
    }
    function setless2() {
        setMore2(false);
    }
    
    const[playmovie,setPlayMovie]=useState(false);
    const[continuelist,setContinueList]=useState();
    const[continuewatch,setContinueWatch]=useState(false);
    function playingmovie(name,image){
        setPlayMovie(!playmovie);
        
        // axios.post("https://screensagadb.up.railway.app/user/addcontinuewatch",{
            axios.post("http://localhost:8081/user/addcontinuewatch",{
            user_mail:userobj.mail,
            video_type:"movie",
            movie_name:name,
            movie_image:image
        })        
    }
    function stopplayingmovie(){
        setPlayMovie(!playmovie);
    }
    return (
            <>
            {
                playmovie?<PlayMovie stopplayingmovie={stopplayingmovie}/>:<div className='bg-dark py-4 text-light ' >
                <div className='container '>
                
                    <div className='row' style={{ marginLeft: "0", marginRight: "0" }}>
                        <div className='col-md-6 text-light'>
                            <p className='text-light' >New Trailers</p>
                            <Trailer name="Harom Hara" image={haromhara} />
                            <Trailer name="Kalki 2898 AD" image={kalki} />
                        </div>

                        <div className='col-md-6'>
                            <p className='text-light' >Watch the Latest</p>
                            <Watch_the_latest playingmovie={playingmovie} name="Mirzapur" image={mirzapur} ht="460px" t="300px" />
                        </div>
                    </div>
                </div>
                
                <div className='row m-4 ' >
                    <h4>ScreenSaga Recommended</h4>
                    {
                        more1 ? <More fn={setless1} playingmovie={playingmovie} url1={url1} url2={url2} /> : <>
                            {
                                list11.map(({ title, backdrop_path, id }) => {
                                    let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                    return <div className='col-md-3'><Card playingmovie={playingmovie} image={image} name={title} key={id} watchdata={watchdata} /></div>
                                })
                            }
                            <div className='row'><p className='btn text-primary float-end' style={{ textAlign: "end" }} onClick={() => setMore1(true)}>See More</p></div></>
                    }
                </div>
                <div className='row m-4'>
                    <h4>ScreenSaga Latest</h4>
                    {
                        more2 ? <More playingmovie={playingmovie} fn={setless2} url1={url1} url2={url2} /> : <>{
                            list22.map(({ title, backdrop_path, id }) => {
                                let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                return <div className='col-md-3'><Card playingmovie={playingmovie} image={image} name={title} key={id} watchdata={watchdata} /></div>
                            })
                        }
                            <div className='row'><p className='btn text-primary float-end' style={{ textAlign: "end" }} onClick={() => setMore2(true)}>See More</p></div></>
                    }
                </div>
                <Contact/>
                
                <div className='container'>
                {showScrollTop && (
                    <span  type="button" className="text-danger" onClick={scrollToTop} style={{position:"fixed",bottom:"0",right:"0"}}>
                    <ArrowCircleUpIcon sx={{fontSize:"40px"}}/>
                    </span>
                  )}
                  </div>
                  <Footer/>
            </div>  
            }
            
        </>
    )
}
export default Home;

    
    
    