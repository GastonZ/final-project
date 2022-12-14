import React from 'react'
import './signin.css'

function SignIn() {

    
  return (
    <>
      <div className='cuter-input-container'>
      <div className='bg-next-in'>

      </div>
        <div>
        <h2 className='text-sign'>Your dream car awaits you</h2>
        <div className='img-circle'></div>

                    <div className='container-input-box'>
                
                            <div className='input-space'>
                              <input className="inputi09" name='email' id='email' placeholder="Email"  type='email'></input>
                            </div>
                            <div className='input-space'>
                              <input className="inputi09" name='password' id='password' placeholder="Password" type='password'></input>
                            </div>
                  
                  
                        <button type='submit' className='button-signup'>Sign In</button>
                      
                    </div>
        
        </div>
      </div>
    </>

  )
}

export default SignIn