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
 
      let {name, image, description, price}= filter
    return(
        <div className="container-eachitem">
            <img className="image-eachitem" src={image} alt="" />
            <div className="item-description-containerr">
            <h2>{name}</h2>
            <h3>${price}</h3>
            <div>
            </div>
            <AddToCartBtnDetail name={name} image={image} price={price} />
            <p className="description-tittle">Description</p>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default EachItemsItems