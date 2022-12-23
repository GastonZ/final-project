import { createReducer } from "@reduxjs/toolkit";
import carRequestActions from "../actions/carRequestActions";

const { createRequest, getRequests } = carRequestActions

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
        .addCase(getRequests.fulfilled,(state,action)=> {
            console.log(action.payload);
            return {
                ...state,
                requests: action.payload.request
            }
        })
    })

export default carRequestReducer