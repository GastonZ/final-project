import React, {useState} from 'react'

function SelectAmount(props) {

    let [ amount , setAmount ] = useState(0)

/*     let data = {
        "amount" : (parseInt(amount))
    } */


    function amountFx(e){
        setAmount(e.target.value)
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