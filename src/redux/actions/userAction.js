import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newUser = createAsyncThunk('newUser', async(data)=> {
    let url = `http://localhost:8000/users`
    try {
        const res = await axios.post(url,data)
        if (res.data.success){
            return {
                success: true,
                response: data,
                responseid: res.data.id,
            }
        } else {
            return{
                success : false,
                response: res.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const usersActions = {
    newUser,

}

export default usersActions