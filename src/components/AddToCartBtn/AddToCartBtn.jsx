import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import { toast } from 'react-toastify';

function AddToCartBtn(props) {

    let { addToCart } = cartActions
  
    let { itemsInCart } = useSelector(store => store.cart)
    let { id } = useSelector(store => store.usuario)
    let itemsFiltered = itemsInCart.filter(items=>items.userId === id)
    console.log(itemsFiltered);
    let dispatch = useDispatch()

    let userId = id

    let { name, price, image } = props

    async function addToCartBtn() {
        let data = {
            name,
            price,
            image,
            userId
        }

        try {
          let res = await dispatch(addToCart(data))
          console.log(res.payload);
          if(res.payload.response==="The new Item has been added to the cart"){
            toast.success('Added to the cart', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          
          }else if(res.payload.response="The item is already in the cart" && res.payload.success === true){
            toast.success('Item added to the cart', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }else if(res.payload.response="The item is already in the cart" && res.payload.success === false) {
            toast.success('Item already in cart', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          } else{
            toast.success('Added to the cart', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        } catch (error) {
          alert('no ?')
        }

        console.log(data);
    }

  return (

    <button onClick={addToCartBtn} className="chango"></button>
  )
}

export default AddToCartBtn