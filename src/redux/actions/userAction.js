import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../api/url'

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

const logIn = createAsyncThunk('logIn', async (data) => {
    let url = `${BASE_URL}signin`
    try {
        let user = await axios.post(url, data)
        console.log(user);

        if(user.data.response.userToken.id) {
            return {
                success: true,
                response: user.data.response
            }
        }else {
            return {
                success: false,
                response: user.response.data.message
            }
        }
    } catch (error) {
        return{

            success: false,
            response: 'lptm un error'
        }
    }
})

const usersActions = {
    newUser,
    logIn
}

export default usersActions