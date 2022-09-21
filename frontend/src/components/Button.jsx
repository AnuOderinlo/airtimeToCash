import React from 'react'
import { ButtonStyle } from '../styles/ButtonStyle'

const Button = ({text, clickHandle, flag, radius}) => {
  return (
    <ButtonStyle flag={flag} type="button" onClick={clickHandle} style={{borderRadius:`${radius}`}}>{text} </ButtonStyle>
  )
}

export default Button