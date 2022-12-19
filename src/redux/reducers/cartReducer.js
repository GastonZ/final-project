import { createReducer } from "@reduxjs/toolkit";
import cartActions from "../actions/cartActions";

const { addToCart } = cartActions

const initialState={
    itemsInCart: []
}

const cartReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(addToCart.fulfilled,(state,action)=>{
            console.log(action.payload);
        })
    })



export default cartReducer