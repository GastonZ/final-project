import React, {useRef, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usersActions from "../../redux/actions/userAction";
import Swal from 'sweetalert2';
import "./signup.css"
function SignUp (){


  let {newUser } = usersActions

  let form = useRef()

  let dispatch = useDispatch()


  async function createNewUser() {
        
    let data = {name, lastName , email, password}
    console.log(data)
    try {
        let res = await dispatch(newUser(data))
        console.log(res)
        if (res.payload.success){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User sign Up ! Next step is to login',
                showConfirmButton: false,
                timer: 2500
              })
              
              setName('')
              setLastName('')
              setEmail('')
              setPassword('')
              
        } else {
            Swal.fire({
                position: 'center',
                title: res.payload.response,
                showConfirmButton: true,
                timer: 2000
              })
        }
    } catch(error){
        console.log(error.message)
    }
}
const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

    return(
        <> 
 <div className='cute-input-container'>
        <div className='bg-next'>

        </div>
        <div className='container-input'>
        <h2 className='text-sign'>Create Account</h2>
        <div className='img-circle'></div>
 
                    <div onSubmit={createNewUser} ref={form} className='container-input-box'>
                 
                            <div className='input-space'>
                                <input className="inputi09" value={name} onChange={(e)=> setName(e.target.value)}  name='name' id='name' placeholder="Name"  type='text'></input>
                            </div>
                  
                   
                            <div className='input-space'>
                             
                            
                              <input className="inputi09" value={lastName} onChange={(e)=> setLastName(e.target.value)} name='lastname' id='lastname' placeholder="Last name"  type='text'></input>
                           
                            </div>
                            <div className='input-space'>
                              <input className="inputi09" value={email} onChange={(e)=> setEmail(e.target.value)} name='email' id='email' placeholder="Email"  type='email'></input>
                            </div>
                            <div className='input-space'>
                              <input className="inputi09" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} id='password' placeholder="Password" type='password'></input>
                            </div>
                   
                   
                        <button type='submit' onClick={createNewUser}  className='button-signup'>Sign Up</button>
                       
                    </div>
        
        </div>
    </div>


        </>
    )
}
export default SignUp