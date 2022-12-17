import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getItems = createAsyncThunk('getItems', async()=> {
    try { 
        const res = await axios.get(
            `${BASE_URL}items`
        )
        console.log(res);
        return {
            items : res.data.response
        }
    } catch (error) {
        console.log(error);
        return {
            payload: "Error"
        }
    }
})

const itemsActions = {
    getItems
}

export default itemsActions