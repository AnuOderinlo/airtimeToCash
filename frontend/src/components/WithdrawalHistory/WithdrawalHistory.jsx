import React from 'react'
import {Withdrawal, WithdrawalWrapper } from './WithdrawalHistoryStyled';

function WithdrawalHistory() {
  return (
  <WithdrawalWrapper>
    <Withdrawal> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Withdrawal>
    
    <Withdrawal> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Withdrawal>


    <Withdrawal> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Withdrawal>
    

    <Withdrawal> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Withdrawal>


    
  </WithdrawalWrapper>
  )
}

export default WithdrawalHistory;