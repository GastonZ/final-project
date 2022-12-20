import React from 'react'
import './cartbtn.css'
import { useSelector } from 'react-redux'
function CartBtn() {

  return (
    
    <div className='cart-btn-container'>
        <span className='cart-quantity-icon '></span>
        <img className='cart-btn-logo cart-quantity-lg' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053851578366447636/icons8-shopping-cart-64_1.png" alt="carrito-link" />
        <span className='cart-quantity-icon'></span>
        <img className='cart-btn-logo cart-quantity-md' src="https://cdn.discordapp.com/attachments/1019371264860770376/1054758226257784923/icons8-shopping-cart-64_2.png" alt="carrito-link" />

    </div>
    
  )}



export default CartBtn