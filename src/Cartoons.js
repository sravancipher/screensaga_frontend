import pushpa2 from './images/pushpa2.jpg';
import manjummel from './images/manjummel.avif'
import polimera2 from './images/polimera2.jpg'
import './Home.css'
import Trailer from './Trailer';
import rrr from './images/rrr.jpg'
import Watch_the_latest from './Watch_the_latest';
import Card from './Card';
import { useState } from 'react';
import More from './More';
import useApi from './useApi';
function Cartoons() {
    const [more1,setMore1]=useState(false);
    const [more2,setMore2]=useState(false);
    let list1=useApi("https://api.sampleapis.com/cartoons/cartoons2D");
    let list2=useApi("https://api.sampleapis.com/cartoons/cartoons2D");
    console.log(list2)
    let num1=Math.floor(Math.random()*(24)) +0;
    let num2=Math.floor(Math.random()*(24)) +0;
    let image1="";
    let image2="";
    let name1,name2;
    
    image1=list1[num1].image;
    image2=list1[num2].image;
    name1=list1[num1].title;
    name2=list1[num2].title;
    
    list1=list1.slice(0,4);
    list2=list2.slice(5,9);
    function setless1(){
        setMore1(false);
    }
    function setless2(){
        setMore2(false);
    }
    
    
    
    return (
        <>
            <div className='bg-dark py-4 text-light'>
                <div className='container '>
                    <div className='row' style={{marginLeft:"0",marginRight:"0"}}>
                        <div className='col-md-6 text-light'>
                            <p className='text-light' >New Trailers</p>
                            <Trailer name={name1} image={image1} />
                            <Trailer name={name2} image={image2} />
                        </div>

                        <div className='col-md-6'>
                            <p className='text-light' >Watch the Latest</p>
                            <Watch_the_latest name="Pushpa- The Rule" image={manjummel} ht="460px" t="300px"/>
                        </div>
                    </div>
                </div>
                <div className='row m-4'>
                   <h4>ScreenSaga Recommended</h4>
                   {
                    more1?<More fn={setless1} url="https://api.sampleapis.com/cartoons/cartoons2D"/>:<>
                    {
                        list1.map(({title,backdrop_path,id})=>{
                            let image='https://image.tmdb.org/t/p/original'+backdrop_path;
                            return <div className='col-md-3'><Card image={image} name={title} key={id}/></div>
                           })
                       }
                    <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>setMore1(true)}>See More?</p></div></>
                   }
                   </div>
                   <div className='row m-4'>
                   <h4>ScreenSaga Latest</h4>
                   {
                    more2?<More fn={setless2} url="https://api.sampleapis.com/cartoons/cartoons2D"/>:<>{
                        list2.map(({title,backdrop_path,id})=>{
                            let image='https://image.tmdb.org/t/p/original'+backdrop_path;
                            return <div className='col-md-3'><Card image={image} name={title} key={id}/></div>
                           })
                       }
                    <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>setMore2(true)}>See More?</p></div></>
                   }
                   </div>
            </div>
        </>
    )
}
export default Cartoons;