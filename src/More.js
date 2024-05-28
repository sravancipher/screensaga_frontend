import Card  from './Card'
import useApi from './useApi'
function More({fn,url}){
    const list=useApi(url);
    
    
    return(
        <>
        
        <div className='row '>
        {
            list.map((l)=>{
                let title=l.title;
                if("original_name" in l){
                    title=l.original_name
                    console.log(title)
                }
                let image='https://image.tmdb.org/t/p/original'+l.backdrop_path;
                return <div className='col-md-3'><Card image={image} name={title} key={l.id}/></div>
            })
          }       
         
        </div>
        <div className='row'><p className='btn text-primary float-end' style={{textAlign:"end"}} onClick={()=>fn()}>See Less</p></div>
        </>
    )
}
export default More;