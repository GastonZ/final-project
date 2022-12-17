import React,{useEffect,useState} from "react";

import axios from "axios";
import "./eachitemdetail.css"
import { useParams } from 'react-router-dom';
import { BASE_URL } from "../../api/url";
import less from "./less.png"
import plus from "./plus.png"
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
 
      let {name, image, description, price}= filter
    return(
        <div className="container-eachitem">
            <img className="image-eachitem" src={image} alt="" />
            <div className="item-description-containerr">
            <h2>{name}</h2>
            <h3>${price}</h3>
            <div>

            <p className="description-tittle">Quantity</p>
            <div className="quantity-container">
                <img className="quantyti-items" src={less} alt="" />
                <p className="description-tittle">1</p>
                <img className="quantyti-itemss" src={plus} alt="" />
            </div>
            </div>
            <button className="button-eachitem-cart"> Add to cart</button>
            <p className="description-tittle">Description</p>
<p>{description}</p>
            </div>
        </div>
    )
}
export default EachItemsItems