import React from 'react'
import Button from '../components/Button'
import { Container } from '../styles/ForgotPassword'

const ForgotPassword = () => {
  return (
    <Container>
      <div className='content'>
          <p className='f-password'>Forget Password</p>
          <p className='f-header'>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
          <form className='f-form'>
            <label className='f-label'>Email</label>
            <input type={'text'} placeholder={'Enter your email'}/>
            <Button text={'Reset password'}/>
          </form>
          <div  className='backtologin'>
            <Button flag={'primary'} text={'Back to Login'}/>
          </div>
      </div>
    </Container>
  )
}

export default ForgotPassword