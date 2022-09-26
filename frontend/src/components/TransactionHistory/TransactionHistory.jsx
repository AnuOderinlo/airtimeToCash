import React from 'react'
import {Transaction, TransactionWrapper } from './TransactionHistoryStyle';

function TransactionHistory() {
  return (
  <TransactionWrapper>
    <Transaction> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Transaction>
    
    <Transaction> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Transaction>


    <Transaction> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Transaction>
    

    <Transaction> 
      <div>
        <p><b>Today,</b> 10:15AM</p> 
        <p>Withdraw fund</p> 
        <p>25/5/2022</p></div>          
        
        <div className='status'>
          <label className='label'>Received</label>
          <p>N5,000</p>
        </div>
    </Transaction>


    
  </TransactionWrapper>
  )
}

export default TransactionHistory;