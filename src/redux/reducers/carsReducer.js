import { createReducer } from "@reduxjs/toolkit";
import carsActions from "../actions/carsActions";

const { getCars } = carsActions

const initialState={
    cars : []
}

const carsReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(getCars.fulfilled,(state,action)=>{
            return {
                cars: action.payload
            }
        })
    })


export default carsReducer