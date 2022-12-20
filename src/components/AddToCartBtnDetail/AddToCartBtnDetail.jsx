import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'
import Swal from 'sweetalert2'

function AddToCartBtnDetail(props) {

    let { addToCart } = cartActions

    let { id, role, logged } = useSelector(store => store.usuario)
    let dispatch = useDispatch()

    let userId = id

    let { name, price, image } = props

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
            name,
            price,
            image,
            userId
        }

        try {
          let res = await dispatch(addToCart(data))
          console.log(res);
          if (res.payload.success) {
            alert('si ?')
          } else {
            alert('ya esta en el carrito')
          }
        } catch (error) {
          alert('no ?')
        }

        console.log(data);
    }

  return (
    <button onClick={addToCartBtn} className="button-eachitem-cart"> Add to cart</button>
  )
}

export default AddToCartBtnDetail