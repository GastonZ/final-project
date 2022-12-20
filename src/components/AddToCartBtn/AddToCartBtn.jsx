import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import { toast } from 'react-toastify';

function AddToCartBtn(props) {

    let { addToCart } = cartActions

    let { id } = useSelector(store => store.usuario)
    let dispatch = useDispatch()

    let userId = id

    let { name, price, image } = props

    let { itemsInCart } = useSelector(store => store.cart)
    let itemsFiltered = itemsInCart.filter(items=>items.userId === id)
    
    console.log(itemsFiltered);
    async function addToCartBtn() {
        let data = {
            name,
            price,
            image,
            userId
        }



        try {
          let res = await dispatch(addToCart(data))
          console.log(res);
          if (res.payload.success) {
            toast.success('Item added to the cart', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
           else if (res.payload.success === false) {
            toast.success('Item is already in the cart', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          } else {
            toast.success('Item is already in the cart', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
          
        } catch (error) {
          alert('fallo estrepitosamente')
        }

        console.log(data);
    }

  return (
    <button onClick={addToCartBtn} className="chango"></button>
  )
}

export default AddToCartBtn