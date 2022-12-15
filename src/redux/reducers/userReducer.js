import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/userAction";
const { newUser, logIn, enterAgain } = usersActions

const initialState ={
    profiles : [],
    name: "",
    photo: "",
    logged: false,
    token: "",
    role: "",
    id: ""
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
                let newState = {
                    ...state,
                    name: userToken.name,
                    photo: userToken.photo,
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
            console.log(action.payload);
            console.log(response);
            if(success) {
                let { userToken, token } = response
                console.log(userToken);
                let newState = {
                    ...state,
                    name: userToken.name,
                    photo: userToken.photo,
                    logged: true,
                    token: token,
                    role: userToken.role,
                    id: userToken.id
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
    })


        
export default userReducer