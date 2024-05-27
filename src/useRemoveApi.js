import axios from "axios";
import { useState } from "react";

async function useRemoveApi(url){
    const[data,updateData]=useState();
    let res=await axios.delete(url);
    if(res.data){
        // console.log(res.data);
        updateData(res.data);
    }
    return data;
}
export default useRemoveApi;