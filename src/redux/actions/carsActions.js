import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getCars = createAsyncThunk('getCars', async ({filtered}) => {
    try {
        const res = await axios.get(
            `${BASE_URL}cars?name=${filtered}`
        )
        console.log(res.data.response);
        return {
            cars : res.data.response,
            filtered: filtered

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