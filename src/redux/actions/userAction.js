import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../api/url'

const newUser = createAsyncThunk('newUser', async(data)=> {
    let url = `${BASE_URL}users`
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
            response: error.response.data.message
        }
    }
})

const enterAgain = createAsyncThunk('enterAgain', async (token) =>{
    let url = `${BASE_URL}token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let user = await axios.post(url,null,headers)
        console.log(user);
        return {
            success: true,
            response: {
                user: user.data.response.user,
                token
            }
        }
    } catch (error) {
        console.log(error.response);
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const logOut = createAsyncThunk('logOut', async (token)=> {
    let url = `${BASE_URL}signout`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let user = await axios.put(url, null, headers)
        return {
            success: true,
            response: user.data.message
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const editUserInfo = createAsyncThunk('editUserInfo', async ({id,data,token})=>{
    let url = `${BASE_URL}me/${id}`
    let headers = {headers: {'Authorization':` Bearer ${token}`}}
    try {
        let res = await axios.patch(url,data,headers)
        console.log(res);
        if(res.data.success){
            return {
                responseId: res.data.id,
                success: true,
                response: data
            }
        } else {
            return {
                success: false,
                response: res.data.message
            }
        }
    } catch (error) {
        console.log(error);
        return {
          success: false, response:"error"
        }
    }
})

const getOneUser = createAsyncThunk("getOneUser", async ({id, token}) => {

    let headers = {headers: {'Authorization':` Bearer ${token}`}}
    let url = `${BASE_URL}me/${id}`
    try {
        const res = await axios.get(url , headers);
        console.log(res);
        return {
            id:id,
            user: res.data.response};
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }

      
})

const usersActions = {
    newUser,
    logIn,
    enterAgain,
    logOut,
    editUserInfo,
    getOneUser
}

export default usersActions