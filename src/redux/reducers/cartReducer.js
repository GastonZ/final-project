import { createReducer } from "@reduxjs/toolkit";
import cartActions from "../actions/cartActions";

const { addToCart, getItemsInCart } = cartActions

const initialState={
    itemsInCart: []
}

const cartReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(addToCart.fulfilled,(state,action)=>{
            if(action.payload.success){
                state.itemsInCart.push(action.payload.response)
            }
        })
        .addCase(getItemsInCart.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                itemsInCart: action.payload.cartItems
            }
        })
    })



export default cartReducer