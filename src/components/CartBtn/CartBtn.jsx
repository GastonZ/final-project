import React from 'react'
import './cartbtn.css'
import { useSelector } from 'react-redux'
function CartBtn() {
  let { itemsInCart } = useSelector(store => store.cart)
  return (
    <div className='cart-btn-container'>
        <span className='cart-quantity-icon'>{itemsInCart.length}</span>
        <img className='cart-btn-logo' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053851578366447636/icons8-shopping-cart-64_1.png" alt="carrito-link" />
    </div>
  )
}

export default CartBtn