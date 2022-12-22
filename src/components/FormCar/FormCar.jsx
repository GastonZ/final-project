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
<>
<h3 className='h3-car-form'>
          Send a message if you are interesed 
      </h3>
      <form ref={form} onSubmit={sendEmail}>
          <div className='car-form-container'>
        <div className='form__group field'>
          <input className='form__field' type="text" name="user_name" />
          <label className="form__label">Name</label>
        </div>
        <div className='form__group field'>
          <input className="form__field" type="email" name="user_email" />
          <label className="form__label">Email</label>
        </div>
        <div className='form__group field'>
          <textarea name="message" />
          <label className="form__label">Message</label>
        </div>
        <button className="car-form-button" type="submit" value="Send" >Send
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
        </button>
      </div>
      </form>
</>



  )
}
export default FormCar