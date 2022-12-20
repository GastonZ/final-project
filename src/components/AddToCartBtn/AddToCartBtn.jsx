import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'

function AddToCartBtn(props) {

    let { addToCart } = cartActions
  
    let { itemsInCart } = useSelector(store => store.cart)
    let { id, role, logged } = useSelector(store => store.usuario)
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
            alert("added")
          }else if(res.payload.response="The item is already in the cart"){
            alert("item is already in the cart bro")
          }else{
            alert("added")
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