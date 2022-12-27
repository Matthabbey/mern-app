import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import {FaUser} from 'react-icons/fa'

const  Register = ()=> { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }) 
  const {name, email, password, confirmPassword} = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, isError, message} = useSelector((state)=>state.auth)

  useEffect(()=>{

  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch, ])
  
  const onChange =  (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
      }))
  }
  const onSubmit = (e)=>{
    e.preventDefault()

    if(password !== password){
        toast.error('Passwords do not match')
    }
    const userData = {name, email, password}
    dispatch(register(userData ))
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