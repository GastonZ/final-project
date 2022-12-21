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
            console.log(action);
            if(action.meta.arg.title){
                state.itemsInCart.push(action.payload.response)
            }
        })
        .addCase(getItemsInCart.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
/*                 ...state, */
                itemsInCart: action.payload.cartItems
            }
        })
    })



export default cartReducer