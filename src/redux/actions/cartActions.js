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
          response: res.data.message
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

const increaseDecreaseQuantity = createAsyncThunk('increaseDecreaseQuantity', async ({ quantity, itemId, query})=> {
  let url = `${BASE_URL}cart/items-cart/${itemId}?query=${query}`
  try {
    let res = await axios.put(url, quantity, itemId, query)
    console.log(res);
    if(!res.data.success){
      return {
          quantity: res.data.item.quantity,
          success: true,
          mensaje: res.data.message
      }
  } else {
      return {
          success: false,
          response: res.data.message
      }
  }
  } catch (error) {
    console.log(error);
  }
})

const deleteItems=createAsyncThunk("deleteItems",async(id)=>{
 let url=`${BASE_URL}cart/items-cart/${id}`
  try {
    const res = await axios.delete(
      url
       )
    console.log(res);
  } catch (error) {
    console.log(error);
    return{
      payload:"error"
    }
  }
})



const cartActions = {
    addToCart,
    deleteItems,
    getItemsInCart,
    increaseDecreaseQuantity
}

export default cartActions