import './Home.css'
import manjummel from './images/manjummel.avif'
import polimera2 from './images/polimera2.jpg'
import rrr from './images/rrr.jpg'
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useContext, useState } from 'react';
import useApi from './useApi';
import More from './More';
import Continue from './Continue';
import dark from './images/dark.jpg'
import { getting2movies } from './getting2movies';
import Contact from './Contact';
import { watchlaterdbdata } from './Routings';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
function Webseries() {
    const {watchdata,showScrollTop,scrollToTop} = useContext(watchlaterdbdata);
    const [more1, setMore1] = useState(false);
    const [more2, setMore2] = useState(false);
    let airing_today = useApi("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6");
    let ontheair = useApi("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6");
    let twomovies = getting2movies(airing_today);
    airing_today = airing_today.slice(0, 4);
    ontheair = ontheair.slice(0, 4);
    function setless1() {
        setMore1(false);
    }
    function setless2() {
        setMore2(false);
    }
    return (
        <>
            <div className='bg-dark py-4 text-light'>
                <div className='container'>
                    <div className='row' style={{ marginLeft: "0", marginRight: "0" }}>
                        <div className='col-md-6 text-light'>
                            <p className='text-light' >Continue Watching</p>
                            <Continue name="Dark" image={dark} key="1" />
                        </div>

                        <div className='col-md-6'>
                            <p className='text-light' >Watch the Latest</p>
                            <Watch_the_latest name={twomovies[0]} image={twomovies[2]} key="2" ht="150px" t="10px" />
                            <Watch_the_latest name={twomovies[1]} image={twomovies[3]} key="3" ht="150px" t="10px" />
                        </div>
                    </div>
                </div>
                <div className='row m-4'>
                    <h4>Airing Today</h4>
                    {
                        more1 ? <More fn={setless1} url="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6" /> : <>
                            {
                                airing_today.map(({ original_name, backdrop_path, id }) => {
                                    let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                    return <div className='col-md-3'><Card image={image} name={original_name} key={id} /></div>
                                })
                            }
                            <div className='row'><p className='btn text-primary float-end' style={{ textAlign: "end" }} onClick={() => setMore1(true)}>See More?</p></div></>
                    }
                </div>
                <div className='row m-4'>
                    <h4>On The Air</h4>
                    {
                        more2 ? <More fn={setless2} url="https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=bcf371704c5b5986177c0d72527ae0a6" /> : <>
                            {
                                ontheair.map(({ original_name, backdrop_path, id }) => {
                                    let image = 'https://image.tmdb.org/t/p/original' + backdrop_path;
                                    return <div className='col-md-3'><Card image={image} name={original_name} key={id} /></div>
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
            </div>
        </>
    )
}
export default Webseries;