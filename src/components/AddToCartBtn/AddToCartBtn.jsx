import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'

function AddToCartBtn(props) {

    let { addToCart } = cartActions

    let { id } = useSelector(store => store.usuario)
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
          await dispatch(addToCart(data))
          alert('si ?')
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