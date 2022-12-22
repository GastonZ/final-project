import React, {useRef} from 'react'
import "./formcar.css"
import emailjs from '@emailjs/browser';


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
      <form ref={form} onSubmit={sendEmail}>
    <div className='car-form-container'>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    
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
    </form>
  )
}
export default FormCar