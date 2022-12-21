import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getItems = createAsyncThunk('getItems', async({filtered})=> {
    try { 
        const res = await axios.get(
            `${BASE_URL}items?title=${filtered}`
        )
        console.log(res);
        return {
            items : res.data.response,
            filtered:filtered
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