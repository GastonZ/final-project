import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../api/url'


const getCars = createAsyncThunk('getCars', async () => {
    try {
        const res = await axios.get(
            `http://localhost:8000/api/cars`
        )
        return {
            cars : res.data
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