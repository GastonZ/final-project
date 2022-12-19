import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'

function AddToCartBtn(props) {

    let { addToCart } = cartActions

    let { id, role, logged } = useSelector(store => store.usuario)
    let dispatch = useDispatch()

    let userId = id
    console.log(id);
    console.log(role);
    console.log(logged);

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
    <button onClick={addToCartBtn} className="chango"></button>
  )
}

export default AddToCartBtn