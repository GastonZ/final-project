import React, {useRef,useState} from 'react'
import AOS from 'aos';
import "./formcar.css"
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 100,
    p: 4,
  };
function FormCar() {
    const [show, setShow] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setShow(true)
    e.preventDefault();

    emailjs.sendForm('service_ce1rnzg', 'template_ndwvejw', form.current, 'Bp83upMlZrii7gPR-')
      .then((result) => {
          setShow(false)
          console.log(result.text);
          toast.success('Message sent', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            e.target.value.reset
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClose = () => setShow(false);
    
  return (
<>
{
                show ? 
                <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Loading/>
                </Box>
              </Modal>
                 : <></>
              }
      <form ref={form} onSubmit={sendEmail}>
          <div className='car-form-container'>
<h3 className='h3-car-form' data-aos="fade-left">
          Send a message if you are interesed 
      </h3>
        <div className='form__group field'>
          <input className='form__field' type="input" name="user_name" />
          <label className="form__label" for="email">Name</label>
        </div>
        <div className='form__group field'>
          <input className="form__field" type="email" name="user_email" />
          <label className="form__label">Email</label>
        </div>
        <div className='form__group field'>
          <textarea className="form__field" name="message" />
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