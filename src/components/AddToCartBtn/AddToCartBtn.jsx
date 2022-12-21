import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function AddToCartBtn(props) {

    let { addToCart } = cartActions
  
    let { itemsInCart } = useSelector(store => store.cart)
    let { id , logged } = useSelector(store => store.usuario)
    let itemsFiltered = itemsInCart.filter(items=>items.userId === id)
    console.log(itemsFiltered);
    let dispatch = useDispatch()

    let userId = id

    let { title, unit_price, picture_url } = props

    async function addToCartBtn() {

      if(!logged) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="/signin">You must sign in to continue shopping !</a>'
        })
        return
      }

        let data = {
            title,
            unit_price,
            picture_url,
            userId
        }

        try {
          let res = await dispatch(addToCart(data))
          console.log(res.payload);
          if(res.payload.response==="The new Item has been added to the cart"){
            toast.success('Added to the cart', {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          
          }else if( res.payload.success === true){
            toast.success('Added to the cart', {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }else if( res.payload.success === undefined) {
            toast.success('Item already in cart', {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }else if( res.payload.success === false) {
            toast.success('Item already in cart', {
              position: "bottom-right",
              autoClose: 2000,
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
              autoClose: 2000,
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