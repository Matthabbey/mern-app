import React from 'react'
import { useState, useEffect} from 'react'
import {FaSign, FaSignInAlt} from 'react-icons/fa'

function Login() { 
  const [formData, setFormData] = useState({

    email: '',
    password: ''
  }) 
  const {email, password} = formData
  
  const onChange =  ()=>{

  }

  return <>
    <section className="heading">
        <h1>
            <FaSignInAlt  /> Login
        </h1>
        <p>Please Login your account</p>
    </section>
    
    <section className="form">
        <form>
             <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter Email' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange}/>
            </div>
        

            <div className="form-group">
                <button className='btn btn-block' type='submit'>Login</button>
            </div>
        </form>
    </section>
  </>
}

export default Login