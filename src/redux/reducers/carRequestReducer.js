import { create } from "@mui/material/styles/createTransitions";
import { createReducer } from "@reduxjs/toolkit";
import carRequestActions from "../actions/carRequestActions";

const { createRequest } = carRequestActions

const initialState= {
    requests: []
}

const carRequestReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(createRequest.fulfilled,(state,action)=>{
            console.log(action);
            if(action.payload.success){
                state.requests.push(action.payload.response)
            }
        })
    })

export default carRequestReducer