import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/userAction";
const { newUser, logIn, enterAgain, logOut, getOneUser } = usersActions

const initialState ={
    profiles : [],
    nameProfile: "",
    photoProfile: "",
    bannerProfile: "",
    logged: false,
    token: "",
    role: "",
    id: "",
    profile: []
}


const userReducer = createReducer (initialState,
    (builder)=>{

        builder   
        .addCase(newUser.fulfilled, (state, action)=> {
            if (action.payload.success) {
                state.profiles.push(action.payload.response)
            }
        })
        .addCase(logIn.fulfilled, (state, action)=> {

            const { success,response } = action.payload
            if (success) {
                let { userToken,token } = response //este token es el codigo que viene del backend
                localStorage.setItem('token',JSON.stringify({token: {user: token}})) //este objeto token va a guardar
                //la propiedad con el nombre del tipo de token y el token que guarda
                console.log(userToken);
                let newState = {
                    ...state,
                    nameProfile: userToken.name,
                    photoProfile: userToken.photo,
                    bannerProfile: userToken.banner,
                    role: userToken.role,
                    logged: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })
        .addCase(enterAgain.fulfilled, (state,action)=> {
            
            const { success, response} = action.payload
            console.log(response);
            console.log(state);
            if(success) {
                let { user, token } = response
              
                let newState = {
                    ...state,
                    nameProfile: user.name,
                    photoProfile: user.photo,
                    bannerProfile: user.banner,
                    logged: true,
                    token: token,
                    role: user.role,
                    id: user.id
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })
        .addCase(logOut.fulfilled, (state,action)=> {
            const { success, response } = action.payload
            if(success){
                localStorage.removeItem('token')
                let newState = {
                    ...state,
                    nameProfile: "",
                    photoProfile: "",
                    bannerProfile: "",
                    logged: false,
                    token: "",
                    role: "",
                    id: ""
                }
                return newState
            } else {
                return console.log(response);
            }
        })
        .addCase(getOneUser.fulfilled,(state,action)=> {
            console.log(action.payload);
            return{
                ...state,
            nameProfile: action.payload.user.name,
            photoProfile: action.payload.user.photo,
            bannerProfile: action.payload.user.banner
            }
        })

    })


        
export default userReducer