import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const addToCart = createAsyncThunk('addToCart', async (data) => {
    let url = `${BASE_URL}cart/items-cart`
    try {
      let res = await axios.post(url,data)
    console.log(res);
      if (res.data.item){
        return {
          success: true,
          response: res.data.item,
        }
      } else {
        return {
          success: false,
          response: res.data.mensaje
        }
      }
    } catch(error) {
      return {
        success: false,
        response: 'ocurrio un error'
      }
    }
  })

const getItemsInCart = createAsyncThunk('getItemsInCart', async ()=>{
  try {
    const res = await axios.get(
        `${BASE_URL}cart/items-cart`
    )
    console.log(res);
    return {
        cartItems : res.data.itemsCart,
    }
} catch (error) {
    console.log(error);
    return {
        payload: "Error"
    }
}
})



const cartActions = {
    addToCart,
    getItemsInCart
}

export default cartActions