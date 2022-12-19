import React, {useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom'
import less from "./less.png"
import plus from "./plus.png"
import { Link } from 'react-router-dom'

function Cart() {

  let {id,logged } = useSelector(store => store.usuario)
  let dispatch = useDispatch()
  
  async function getItemsInCartMap(){
    await dispatch(getItemsInCart())
  }
  
  useEffect(() => {
    getItemsInCartMap()
  },[])
  
  
  let { getItemsInCart ,deleteItems} = cartActions
  
  let { itemsInCart } = useSelector(store => store.cart)
  let itemsFiltered = itemsInCart.filter(items=>items.userId === id)
  let precio = []

  itemsFiltered.map((x)=>{
    precio.push(x.price * x.amount)
  })  
  let total = precio.reduce(
    (sum, item) => sum + item,
    0
  )

  console.log(itemsFiltered);
async function handleDelete(idDelete){
  
  try {
    await dispatch(deleteItems(idDelete))
    dispatch(getItemsInCart())
    
  } catch (error) {
    console.log(error);
  }
}
  console.log(total);
  return (
    <motion.div>
      <main className='cart-main-container'>
        <div className='div-container'>
          <div className='cart-container'>
            <div className='cart-header'>
              <h2>Cart</h2>
            </div>
            <div className='cart-section-container'>
              <div className='cart-line-section'>
                <div className='cart-items-container'>
                {/* Comienzo card de producto */}
              {itemsFiltered.length == 0 ?(
                <div className='cartEmptyContainer'>
             
                  <p className='textEmptyCart'>Your cart is empty.</p>
                  <div className='buttonCartEmpty'>

                <Link to="/shop" className="button-empty"> <button className='color-whitee'  > Continue Shopping</button>  </Link>
                  {logged== true?(""):
                  <button  className="button-eachitem-signin"> Sign in</button>}
                  </div>
                </div>
              ):
                itemsFiltered.map((x)=>{
                  return(
                  <div className='cart-line-section-2'>
                    <div className='cart-line-image'>
                      <img height='120' src={x.image} alt="" />
                    </div>
                    <div className='cart-line-container'>
                      <div className='cart-line-info'>
                        <h4 className='m-0 p-0'>{x.name}</h4>
                      </div>
                      <div className='cart-line-quantity'>
                        <p className='m-0 p-0'>Quantity </p>
                        <div className="quantity-container">
                          <img className="quantyti-items" src={less} alt="" />
                          <p className="description-tittle">{x.amount}</p>
                          <img className="quantyti-itemss" src={plus} alt="" />
                        </div>
                      </div>
                      <div className='cart-line-remove'>
                        <p className='remove-cart-btn'  onClick={() => handleDelete(x._id)}>Remove</p>
                      </div>
                    </div>
                  <span className='cart-line-price'>${x.price}</span>
                  </div>
                    )
                  })
                }
                {/* Fin card de producto */}
                </div>
              </div>
              {itemsFiltered.length == 0 ?(
               ""
              ):
              <div className='cart-section'>
                <div className='cart-sum-section'>
                  <div>
                    <h3>Order Summary</h3>
                  </div>
                  <div className='cart-sum'>
                    <p>Shipping</p>
                    <p>Free</p>
                  </div>
                  <div className='cart-sum'>
                    <p>Sales Tax</p>
                    <p>Calculated at checkout</p>
                  </div>
                  <div className='cart-sum'>
                    <p className='negrita'>Subtotal</p>
                    <p className='negrita'>${total}</p>
                  </div>
                  <div>
                    <button className='checkout-btn'>Checkout</button>
                  </div>
                </div>
              </div>}
            </div>

          </div>
        </div>

      </main>
    </motion.div>

  )
}

export default Cart