import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const getCars = createAsyncThunk('getCars', async () => {
    try {
        const res = await axios.get(
            `http://localhost:8000/api/cars`
            )
         console.log(res);
        return {
            cars : res.data.response
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