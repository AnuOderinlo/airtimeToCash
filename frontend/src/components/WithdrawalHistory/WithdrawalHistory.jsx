import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import {Withdrawal, WithdrawalWrapper } from './WithdrawalHistoryStyled';

function WithdrawalHistory() {
  const [withdrawal, setWithdrawal] = useState([])

  const token = localStorage.getItem('token')

  const fetchBankRecord = async () => {
    const response = await axios.get(`/withdrawal/getUserWithdrawal`, {
        headers: {
            contenType: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if(response.status === 200){
      setWithdrawal(response.data.withdrawals.rows)
    }
  }

  useEffect(() => {
    fetchBankRecord()
  }, [])

  useEffect(() => {
    fetchBankRecord()
  }, [withdrawal])

  const regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})?.([:0-9]+)/;

  return (
  <WithdrawalWrapper>
    {
      withdrawal.map((withdraw) => (
        <Withdrawal> 
            <div>
              <p><b>Today,</b>{withdraw.updatedAt.match(regex)[2]}</p> 
              <p>Withdraw Fund</p> 
              <p>{withdraw.updatedAt.split('T')[0]}</p>
            </div>          
            
            <div className='status'>
              <label className='label'>{withdraw.status === false ? 'Failed' : 'Success'}</label>
              <p>{withdraw.amount}</p>
            </div>
        </Withdrawal>
      ))
    }
    
    
    {/* <Withdrawal> 
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
    </Withdrawal> */}


    
  </WithdrawalWrapper>
  )
}

export default WithdrawalHistory;