import React from 'react'
import './cartbtn.css'
import { useSelector } from 'react-redux'
function CartBtn() {
  let {id } = useSelector(store => store.usuario)
  let { itemsInCart } = useSelector(store => store.cart)
/*   let itemsFiltered = itemsInCart.filter(items=>items.userId === id) */
/* if(itemsFiltered.length == 0 ){
  return("")
}else{ */

  return (
    
    <div className='cart-btn-container'>
{/*         <span className='cart-quantity-icon'>{itemsFiltered.length}</span> */}
        <img className='cart-btn-logo' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053851578366447636/icons8-shopping-cart-64_1.png" alt="carrito-link" />
    </div>
  )/* } */
}


export default CartBtn