import React from 'react'
import '../styles/form.css'
import '../styles/utils.css'

export default function Login() {
  return (
    <>
    <div className='form-box'>
    <div className='circle rounded-full flex justify-center'></div>
    <form className='pb-3'>
        
        <div className='form-material bg-white/5 '>
            <h1 className='text-center py-6 text-4xl'>Welcome Back</h1>
        <input type='text' placeholder='username' name='username'></input>
        <br></br>  <br></br>  
        <input type='password' placeholder='password' name='password'></input>
        <br></br>  <br></br>
        <center>
        <button  type='submit'>
            
            Login</button>
        </center>
        </div>
        
    </form>
    <div className='form-banner'></div>
    </div>
    </>
  )
}
