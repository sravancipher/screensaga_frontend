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
import Joyride from 'react-joyride';
import PlayMovie from './PlayMovie';
import './Home.css'
import { userobjcontext } from './Landing';
function Home() {
    const {watchdata,showScrollTop,scrollToTop,moviesseries} = useContext(watchlaterdbdata);
    const{userobj}=useContext(userobjcontext);
    const [more1, setMore1] = useState(false);
    const [more2, setMore2] = useState(false);
    const url1="https://api.themoviedb.org/3/discover/movie?&api_key=bcf371704c5b5986177c0d72527ae0a6&with_original_language=te";
    const url2="https://api.themoviedb.org/3/movie/now_playing?&api_key=bcf371704c5b5986177c0d72527ae0a6&language=en-US&page=1";
    let list1 = useApi(url1);
    
    let list2 = useApi(url2);
    // let list3=useApi("https://api.themoviedb.org/3/movie/now_playing?&api_key=bcf371704c5b5986177c0d72527ae0a6&language=en-US&page=1")
    
    let movies_series;
  list1.map((item)=>{movies_series+=item.title})

  movies_series+="manjummel boysmirzapurdarkBahubali 2: The Conclusion"
  moviesseries(movies_series);
    let twomovies = getting2movies(list1);
    const list11 = list1.slice(0, 4);
    const list22 = list2.slice(5, 9);
    function setless1() {
        setMore1(false);
    }
    function setless2() {
        setMore2(false);
    }
    // const[continuelist,setContinueList]=useState();
    const[playmovie,setPlayMovie]=useState(false);
    function playingmovie(){
        setPlayMovie(!playmovie);
        
    }    
    return (
            <>
            {
                playmovie?<PlayMovie playingmovie={playingmovie}/>:<div className='bg-dark py-4 text-light ' >
                <div className='container '>
                
                    <div className='row' style={{ marginLeft: "0", marginRight: "0" }}>
                        <div className='col-md-6 text-light'>
                            <p className='text-light' >New Trailers</p>
                            <Trailer name={twomovies[0]} image={twomovies[2]} />
                            <Trailer name={twomovies[1]} image={twomovies[3]} />
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
            </div>  
            }
            
        </>
    )
}
export default Home;