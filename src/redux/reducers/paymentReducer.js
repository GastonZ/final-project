import { createReducer } from "@reduxjs/toolkit";
import paymentActions from "../actions/PaymentActions";

const { mpPayment } = paymentActions

const initialState = {

}

const paymentsReducer = createReducer(initialState, 
    (builder) => {
        builder.addCase(mpPayment.fulfilled, (state,action) => {
            return {

            }
        })
})

export default paymentsReducer

/* ?XD */