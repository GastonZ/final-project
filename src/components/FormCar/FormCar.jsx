import React, {useRef,useState} from 'react'
import AOS from 'aos';
import "./formcar.css"
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import carRequestActions from '../../redux/actions/carRequestActions'
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
function FormCar(props) {

  const nameRef = useRef()
  const messageRef = useRef()
  const emailRef = useRef()
  const formRef = useRef()

  let { id, logged } = useSelector(store => store.usuario)

  let dispatch = useDispatch()

  let [user_name, setUser_name] = useState('')
  let [user_email, setUser_email] = useState('')
  let [request, setRequest] = useState('')

  let userId = id

  let { createRequest } = carRequestActions

  let { car_model, car_photo } = props

    const [show, setShow] = useState(false);

  const sendEmail = async (e) => {
    setShow(true)

    let data = {car_model, car_photo ,  user_name , user_email, request, userId  }

    dispatch(createRequest(data))

    e.preventDefault();

    if(user_name === '' || user_email === '' || request === '' ){
      setShow(false)
      toast.warn('You must complete all fields', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return
    } else if(logged === false) {
      setShow(false)
      toast.warn('You need to sign in first', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return
    }
     else {
      emailjs.sendForm('service_ce1rnzg', 'template_ndwvejw', formRef.current, 'Bp83upMlZrii7gPR-')
      .then((result) => {
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
            formRef.current.reset()
      }, (error) => {
          console.log(error.text);
      });
    }

   
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
      <form ref={formRef} onSubmit={sendEmail}>
          <div className='car-form-container'>
<h3 className='h3-car-form' data-aos="fade-left">
          Send a message if you are interesed 
      </h3>
        <div className='form__group field'>
          <input ref={nameRef} className='form__field' onChange={e => setUser_name(e.target.value)} type="input" name="user_name" />
          <label className="form__label" for="name">Name</label>
        </div>
        <div className='form__group field'>
          <input ref={emailRef} className="form__field" onChange={e => setUser_email(e.target.value)} type="email" name="user_email" />
          <label className="form__label">Email</label>
        </div>
        <div className='form__group field'>
          <textarea ref={messageRef} className="form__field" name="message" onChange={e => setRequest(e.target.value)} />
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