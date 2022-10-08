import React, {useState, useEffect} from 'react'
import {Transaction, TransactionWrapper } from './TransactionHistoryStyle';
import { mainAxios } from "../Axios/Axios";

function TransactionHistory() {
  let [transactions, setTransactions] =useState([]);

  const getTransactions = async() => {
    try {
      const res = await mainAxios.get("/transactions?status=All-Transactions");
      setTransactions(res.data.data);
      console.log(res.data);                  
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getTransactions()
  }, []);

  console.log(transactions);

  console.log("Is it")
  
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