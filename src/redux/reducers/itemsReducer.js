import { createReducer } from "@reduxjs/toolkit";
import itemsActions from "../actions/itemsActions";

const { getItems } = itemsActions

const initialState={
    items : [],
    filtered:""
}

const itemsReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(getItems.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                ...state,
                items: action.payload.items,
                filtered:action.payload.filtered

            }
        })
    })



export default itemsReducer