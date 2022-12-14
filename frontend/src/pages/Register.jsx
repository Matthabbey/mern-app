import React from 'react'
import { useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }) 
  const {name, email, password, confirmPassword} = formData
  
  const onChange =  ()=>{

  }

  return <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please register your account</p>
    </section>
    
    <section className="form">
        <form>
            <div className="form-group">
            <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter Name' onChange={onChange}/>
            </div>
             <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter Email' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange}/>
            </div>
            <div className="form-group">
            <input type="confirmPassword" className='form-control' id='confirmPassword' name='confirmPassword' value={password} placeholder='Confirm password' onChange={onChange}/>
            </div>

            <div className="form-group">
                <button className='btn btn-block' type='submit'>Register</button>
            </div>
        </form>
    </section>
  </>
}

export default Register