import React, {useRef} from 'react'
import "./formcar.css"
import emailjs from '@emailjs/browser';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ce1rnzg', 'template_ndwvejw', form.current, 'Bp83upMlZrii7gPR-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
    
  return (
    <div className='car-form-container'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <h3 className='h3-car-form'>
          Send a message if you are interesed 
      </h3>

      <div class="form__group field">
          <input required="" placeholder="Name" name="user_name" class="form__field" type="input"/>
          <label class="form__label" for="name">Name</label>  
      </div>
      <div class="form__group field">
          <input required="" placeholder="Name" name="user_email" class="form__field" type="email"/>
          <label class="form__label" for="email">Email</label>

      </div>
      <select name="message" id="" className='select-car-form'>
          <option value="">Select a message</option>
          <option className='op' value="I would like to know the budget">I would like to know the budget</option>
          <option className='op' value="I would like to see it in person">I would like to see it in person</option>
          <option className='op' value="I would like to arrange a test drive">I would like to arrange a test drive</option>
      </select>
      <label>Message</label>
      <textarea name="message" />
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