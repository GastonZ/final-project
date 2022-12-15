import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/userAction";
const { newUser } = usersActions

const initialState ={
    profiles : [],


}


const userReducer = createReducer (initialState,
    (builder)=>{

        builder   
        .addCase(newUser.fulfilled, (state, action)=> {
            if (action.payload.success) {
                state.profiles.push(action.payload.response)
            }
        })})
        
export default userReducer