import React from 'react'
import { useSelector } from 'react-redux'

function AddToCartBtn(props) {

    let { name, price, image } = props

    function addToCartBtn() {
        let data = {
            name,
            price,
            image
        }

        console.log(data);
    }

  return (
    <button onClick={addToCartBtn} className="chango"></button>
  )
}

export default AddToCartBtn