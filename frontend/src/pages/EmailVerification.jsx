import React from 'react'
import { Container } from '../styles/EmailVerification'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import Button from '../components/Button'

const EmailVerification = () => {
  return (
    <Container>
      <MdOutlineMarkEmailRead size={'100px'} color={'#03435F'}/>
      <p className='v-header'>Check your mail</p>
      <p className='v-message'>We sent a password reset link to your email. Please click the link to reset your password</p>
      <p className='v-link'>Don’t receive the email? <span>Click to Resend link </span></p>
      <Button text={'Back to Login'} radius={0}/>

    </Container>
  )
}

export default EmailVerification