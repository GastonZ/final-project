import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

import { BASE_URL } from "../../api/url";

const createRequest = createAsyncThunk('createRequest', async(data) =>{
    try {
        const url = `${BASE_URL}carrequest`
        const res = await axios.post(url, data)
        console.log(res.data.response);
    } catch (error) {
        console.log(error);
    }
})

const getRequests = createAsyncThunk('getRequests', async() => {
    try {
        const res = await axios.get(
            `${BASE_URL}carrequest`
        )
        console.log(res.data.response);
        return {
            request : res.data.response
        }
    } catch (error) {
        console.log(error);
        return {
            payload: "Error"
        }
    }
})

const carRequestActions = {
    createRequest,
    getRequests
}

export default carRequestActions