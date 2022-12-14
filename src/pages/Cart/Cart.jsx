import React, {useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import paymentActions from '../../redux/actions/paymentActions'
import axios from 'axios'
import less from "./less.png"
import plus from "./plus.png"
import { BASE_URL } from '../../api/url'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 100,
  p: 4,
};
function Cart() {


  let { mpPayment } = paymentActions

  let {id,logged } = useSelector(store => store.usuario)
  let dispatch = useDispatch()
  
  async function getItemsInCartMap(){
    await dispatch(getItemsInCart())
  }
  
  useEffect(() => {
    getItemsInCartMap()
  },[])
  
  
  let { getItemsInCart ,deleteItems, increaseDecreaseQuantity} = cartActions
  
  let { itemsInCart } = useSelector(store => store.cart)
  let itemsFiltered = itemsInCart.filter(items=>items.userId === id)
  let precio = []


  itemsFiltered.map((x)=>{
    precio.push(x.unit_price * x.quantity)
  })  
  let total = precio.reduce(
    (sum, item) => sum + item,
    0
  )
  
  const [show, setShow] = useState(false);

  async function handleDelete(idDelete){
  setShow(true)
  
    try {

      await dispatch(deleteItems(idDelete))
      dispatch(getItemsInCart())
      setShow(false)
    } catch (error) {
      console.log(error);
      setShow(false)
    }


  }

  async function increaseQuantity(itemId){

    let query = "add"

    let quantity = {
      "quantity" : 1
    }

    try {
       let res = await dispatch(increaseDecreaseQuantity({quantity, itemId, query}))
       await dispatch(getItemsInCart())
        console.log(res);
      } catch (error) {
      console.log(error);
    }
  }
  
  async function decreaseQuantity(itemId){
    
    let query = "del"

    let quantity = {
      "quantity" : 1
    }

    try {
       let res = await dispatch(increaseDecreaseQuantity({quantity, itemId, query}))
       await dispatch(getItemsInCart())
        console.log(res);
      } catch (error) {
      console.log(error);
    }


/*     if(itemsFiltered.quantity <= 0) {
      await dispatch(deleteItems(itemId))
    }
 */
  }


  let items = []

  items = itemsFiltered.map(item =>( 

    {
      title: item.title,
      unit_price: item.unit_price,
      picture_url: item.picture_url,
      quantity : item.quantity
    }

  ))

  let preference = {

    back_urls: {
      failure: "https://motorx.vercel.app/",
      success: "https://motorx.vercel.app/"
    }
  }
  preference.items= items

  const payment = async () => {

    try {
      let res = await dispatch(mpPayment(preference))
      console.log(res);

      if(res.payload.success){
         window.location.assign(res.payload.response.init_point) 
          await axios.delete(`${BASE_URL}cart/items-cart/paymentDone/${id}`)
      }


    } catch (error) {
      console.log(error.response);
    }

  }

  console.log(items);


const handleClose = () => setShow(false);

  return (
    <motion.div>
              {
                show ? 
                <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Loading/>
                </Box>
              </Modal>
                 : <></>
              }
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

                  let quantity = x.quantity

                  return(
                  <div className='cart-line-section-2 p-2'>
                    <div className='cart-line-image'>
                      <img height='120' src={x.picture_url} alt="" />
                    </div>
                    <div className='cart-line-container'>
                      <div className='cart-line-info'>
                        <h4 className='m-0 p-0'>{x.title}</h4>
                      </div>
                      <div className='cart-line-quantity'>
                        <p className="description-tittle">Quantity:  </p>
                        {
                          quantity <= 1 ? <>
                          <img className="quantyti-items"  src={less} alt="" /></> 
                          :
                          <img className="quantyti-items" onClick={()=> decreaseQuantity(x._id)} src={less} alt="" />
                        }
                        <p className="description-tittle">{x.quantity}</p>
                        <img className="quantyti-itemss" onClick={() => increaseQuantity(x._id)} src={plus} alt="" />
                      </div>
                      <div className='cart-line-remove'>
                        <p className='remove-cart-btn'  onClick={() => handleDelete(x._id)}>Remove</p>
                      </div>
                    </div>
                  <span className='cart-line-price'>${x.unit_price}</span>
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
                    <button onClick={payment} className='checkout-btn'>Checkout</button>
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