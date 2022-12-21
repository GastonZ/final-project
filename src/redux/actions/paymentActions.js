import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const mpPayment = createAsyncThunk("mpPaymment", async (preference) => {

    const url = `${BASE_URL}cart/payments`
    
    try {
        const res = await axios.post(url, preference)

        console.log(res);
        return {
            response: res.data,
            success: true
        }
    } catch (error) {
        console.log(error);
    }
})

const paymentActions = {
    mpPayment
}

export default paymentActions