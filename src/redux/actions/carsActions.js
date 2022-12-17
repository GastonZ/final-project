import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getCars = createAsyncThunk('getCars', async () => {
    try {
        const res = await axios.get(
            `${BASE_URL}cars`
        )
        console.log(res.data.response);
        return {
            cars : res.data.response,
            

        }
    } catch (error) {
        console.log(error);
        return {
            payload: "Error"
        }
    }
})

const carsActions = {
    getCars
}

export default carsActions