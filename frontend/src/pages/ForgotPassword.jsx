import React, { useState } from 'react'
import Button from '../components/Button'
import { Container } from '../styles/ForgotPassword'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import axios from '../api/axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState({ email: '' })
  const navigate = useNavigate()

  const handleEmail = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({...email, [name]: value})
  }

  const handleSubmit = async () => {
    try{
      const response = await axios.post('/users/forgot-password', {
        ...email
      })

      if(response.status === 200){
        localStorage.setItem('userEmail', JSON.stringify({...email}))
        toast.success(response.data.message);
        
        setTimeout(()=> {
          navigate('/verification')
        }, 5000)
      }
      clearTimeout()
    } catch (error) {
      toast.error('Invalid Email')
    }

  }

  const handleBack = () => {
    navigate('/login')
  }

  return (
    <>
    <ToastContainer/>
    <Container>
      <div className='content'>
          <p className='f-password'>Forget Password</p>
          <p className='f-header'>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
          <form className='f-form' onSubmit={handleSubmit}>
            <label className='f-label'>Email</label>
            <input type={'email'} name={'email'} placeholder={'Enter your email'} value={email.email || ''} onChange={handleEmail} required/>
            <Button text={'Reset password'} type={'submit'} clickHandle={handleSubmit}/>
          </form>
          <div  className='backtologin'>
            <Button flag={'primary'} text={'Back to Login'} clickHandle={handleBack}/>
          </div>
      </div>
    </Container>
    </>
  )
}

export default ForgotPassword