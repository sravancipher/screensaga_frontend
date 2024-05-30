import axios from 'axios'
import { useEffect, useState } from 'react'
function useApi(url){
    const [list,updateList]=useState([]);
    useEffect(()=>{
        getList()
    },[])
    async function getList(){
        // let res=await axios.get('http://localhost:3000/lists?_page=1&_limit=4');
        let res=await axios.get(url);
        let data=res.data.results;
        if(url.includes("cartoons")){
            updateList(data)
        }else{
            let filteredMovies = data.filter(movie => movie.id !== 63376 && movie.id !== 36361 && movie.id!==264306)
            updateList(filteredMovies)
        }
        
    }
    return list;
}
export default useApi;