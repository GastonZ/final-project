import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions'

function SelectAmount(props) {

    let dispatch = useDispatch()

    let { increaseDecreaseQuantity } = cartActions

    let { itemId } = props

    let [ quantity , setAmount ] = useState()

/*     let data = {
        "amount" : (parseInt(amount))
    } */


    async function amountFx(e){
        setAmount(e.target.value)
        let data = {
            "quantity" : (parseInt(quantity))
        } 
        console.log(data);
        try {
            let res = await dispatch(increaseDecreaseQuantity({itemId: itemId, data}))
            console.log(res);
        } catch (error) {
            console.log(error);
        }

    }



    return (
    <select onChange={amountFx} className='cart-select'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
    </select>
  )
}

export default SelectAmount