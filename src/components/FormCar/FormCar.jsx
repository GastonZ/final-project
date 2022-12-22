import React from 'react'
import "./formcar.css"
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

function FormCar() {
    
  return (
    <div className='car-form-container'>
<h3 className='h3-car-form'>
    Send a message if you are interesed 
</h3>
<div class="form__group field">
    <input required="" placeholder="Name" class="form__field" type="input"/>
    <label class="form__label" for="name">Name</label>

    
</div>

<div class="form__group field">
    <input required="" placeholder="Name" class="form__field" type="email"/>
    <label class="form__label" for="email">Email</label>

    
</div>
<select name="" id="" className='select-car-form'>
    <option value="">Select a message</option>
    <option className='op' value="">I would like to know the budget</option>
    <option className='op' value="">I would like to see it in person</option>
    <option className='op' value="">I would like to arrange a test drive</option>
</select>
<button class="car-form-button">
Send
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
    </div>
  )
}
export default FormCar