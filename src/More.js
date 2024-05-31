import Card  from './Card'
import useApi from './useApi'
function More({fn,playingmovie,url1,url2}){
    // const list=useApi(url);
    let list1 = useApi(url1);
    
    let list2 = useApi(url2);
    // let list3=useApi("https://api.themoviedb.org/3/movie/now_playing?&api_key=bcf371704c5b5986177c0d72527ae0a6&language=en-US&page=1")

    
    list1=[...list1,...list2];
    
    
    
    return(
        <>
        
        <div className='row '>
        {
            list1.map((l)=>{
                let title=l.title;
                if("original_name" in l){
                    title=l.original_name
                    console.log(title)
                }
                let image='https://image.tmdb.org/t/p/original'+l.backdrop_path;
                return <div className='col-md-3 '><Card playingmovie={playingmovie} image={image} name={title} key={l.id}/></div>
            })
          }       
         
        </div>
        <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>fn()}>See Less</p></div>
        </>
    )
}
export default More;