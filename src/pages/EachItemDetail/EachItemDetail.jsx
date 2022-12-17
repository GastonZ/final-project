import React,{useEffect,useState} from "react";

import axios from "axios";

import { useParams } from 'react-router-dom';
import { BASE_URL } from "../../api/url";
function EachItemsItems (){
    let item = useParams()
    let [filter, setFilter] = useState([])
    item = (item.id).slice(1)
    async function detailItem() {
        await axios.get(`${BASE_URL}items`)
        .then(response=>setFilter(response.data.response.find((x)=>x._id === item)))
  
      }

      useEffect(()=> {
        detailItem()
      },[item])
 
      let {name}= filter
    return(
        <div><h1>{name}</h1></div>
    )
}
export default EachItemsItems