import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import './signin.css'
import usersActions from '../../redux/actions/userAction'


function SignIn() {

  let history = useNavigate()

  let dispatch = useDispatch()
  let { logIn } = usersActions

  async function signIn(e){
    let data = { email, password }


    try {
      
      let res = await dispatch(logIn(data))

      console.log(res);

      if(res.payload.success) {
        alert('loggeado')
        history('/')
      } else {
        alert('que paso u_u')
      }


    } catch (error) {
      console.log(error)
    }


  }
  

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  return (
    <>
      <div className='cuter-input-container'>
      <div className='bg-next-in'>

      </div>
        <div>
        <h2 className='text-sign'>Your dream car awaits you</h2>
        <div className='img-circle'></div>
        <div>
          <div className='container-input-box'> 
            <div className='input-space'>
             <input className="inputi09" onChange={(e)=> setEmail(e.target.value)} name='email' id='email' placeholder="Email"  type='email'></input>
            </div>
            <div className='input-space'>
              <input className="inputi09" onChange={(e)=> setPassword(e.target.value)} name='password' id='password' placeholder="Password" type='password'></input>
            </div>
            <button onClick={signIn} type='submit' className='button-signup'>Sign In</button>
          </div>
            <Link to='/signup'>Already have an account ?</Link>   
        </div>
        </div>
      </div>
    </>

  )
}

export default SignIn