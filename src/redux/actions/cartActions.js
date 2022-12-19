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



const cartActions = {
    addToCart
}

export default cartActions