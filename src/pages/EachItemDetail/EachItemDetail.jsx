import React,{useEffect,useState} from "react";
import AddToCartBtnDetail from "../../components/AddToCartBtnDetail/AddToCartBtnDetail";
import axios from "axios";
import "./eachitemdetail.css"
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
 
      let {title, picture_url, description, unit_price}= filter
    return(
        <div className="container-eachitem">
            <img className="image-eachitem" src={picture_url} alt="" />
            <div className="item-description-containerr">
            <h2>{title}</h2>
            <h3>${unit_price}</h3>
            <div>
            </div>
            <AddToCartBtnDetail title={title} picture_url={picture_url} unit_price={unit_price} />
            <p className="description-tittle">Description</p>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default EachItemsItems