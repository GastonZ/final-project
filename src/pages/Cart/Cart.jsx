import React from 'react'
import { motion } from 'framer-motion'
import './cart.css'

function Cart() {
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

                  <div className='cart-line-section-2'>
                    <div className='cart-line-image'>
                      <img height='120' src="https://64.media.tumblr.com/946b397393e78e4cdf984d69936dd811/3bf8e8f705e1bbf0-1b/s1280x1920/e14ac57f9ee39a250a9d933e2cc5218dba3700fa.png" alt="" />
                    </div>
                    <div className='cart-line-container'>
                      <div className='cart-line-info'>
                        <h4 className='m-0 p-0'>Nombre del item</h4>
                      </div>
                      <div className='cart-line-quantity'>
                        <p className='m-0 p-0'>Quantity : </p>
                        <input className='number-input' min='1' type="number"/>
                      </div>
                      <div className='cart-line-remove'>
                        <p className='remove-cart-btn'>Remove</p>
                      </div>
                    </div>
                  <span className='cart-line-price'>$450</span>
                  </div>

                {/* Fin card de producto */}
                </div>
              </div>
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
                    <p className='negrita'>$450</p>
                  </div>
                  <div>
                    <button>Checkout</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </motion.div>

  )
}

export default Cart