import React from 'react'
import {Transaction, TransactionWrapper } from './TransactionHistoryStyle';

function TransactionHistory() {
  return (
  <TransactionWrapper>
    

    <Transaction> 
      <div>
        <p><b>Status</b> </p> 
        <p>Airtime amount</p> 
        <p>25/5/2022, 10:15AM</p>
      </div>          
        
      <div className='status'>
        <label className='label'>Received</label>
        <p>N5,000</p>
      </div>
    </Transaction>


    
  </TransactionWrapper>
  )
}

export default TransactionHistory;