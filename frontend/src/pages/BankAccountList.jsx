import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { Bg, Cards, Container, Form, Scroll } from '../styles/BankAccountList'
import { useRecoilState } from 'recoil';
import { viewAccountRecord } from '../atoms/manageAccountStates';
import { showSuccessModal } from '../atoms/manageAccountStates';
import axios from '../api/axios';

// const sampleAccountRecord = [
//     {'id': '1', 'bank': 'Access Bank', 'name': 'Oluwaseun Akinruli', 'accountNumber': '3170087553'},
//     {'id': '2', 'bank': 'First Bank', 'name': 'Temitope Adejolu', 'accountNumber': '2170087453'},
//     {'id': '3', 'bank': 'Wema Bank', 'name': 'Anuoluwapo Oderinde', 'accountNumber': '3170327553'},
//     {'id': '4', 'bank': 'Union Bank', 'name': 'Chidi Okeke', 'accountNumber': '0170087253'},
//     {'id': '5', 'bank': 'Stanbic IBTC', 'name': 'John Oluwole', 'accountNumber': '1170387553'},
//     {'id': '6', 'bank': 'Kuda Bank', 'name': 'Obianuju Onuegbu', 'accountNumber': '3070087593'},
//     {'id': '7', 'bank': 'Wema Bank', 'name': 'Anuoluwapo Oderinde', 'accountNumber': '3170327553'},
//     {'id': '8', 'bank': 'Union Bank', 'name': 'Chidi Okeke', 'accountNumber': '0170087253'},
//     {'id': '9', 'bank': 'Stanbic IBTC', 'name': 'John Oluwole', 'accountNumber': '1170387553'},
//     {'id': '10', 'bank': 'Kuda Bank', 'name': 'Obianuju Onuegbu', 'accountNumber': '3070087593'}
// ]

const BankAccountList = () => {
  const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
  const [showModal, setShowModal] = useRecoilState(showSuccessModal);
  const [bankAccountList, setBankAccountList] = useState([])

  const userID = localStorage.getItem('id')
  const token = localStorage.getItem('token')

  const fetchBankRecord = async () => {
    const response = await axios.get(`/account/getuseraccount/${userID}`, {
        headers: {
            contenType: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if(response.status === 200) {
        const reverseBankList = [...response.data.data].reverse()
        return setBankAccountList(reverseBankList)
    }
  }

  const handleRemoveAccount = async (value) => {
    const response = await axios.delete(`/account/deleteaccount/${value}`, {
        headers: {
            contenType: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    if(response.status === 200){
        fetchBankRecord()
    }
  }

  const handleRemove = () => {
    setViewAccount(false)
    showModal(false)
  }

  useEffect(() => {
    fetchBankRecord()
  }, [])

  return (
    <Bg>
        <Container>
            <Form>
                <div className='acount-headers'>
                    <h3>Bank Accounts</h3>
                </div>
                <Scroll>
                {
                    bankAccountList.map((account) => (
                        <Cards key={account.id}>
                            <div className='account-record'>
                                <div className='details'>
                                    <h5>{account.bankName}</h5>
                                    <h5>{account.accountNumber}</h5>
                                    <h5>{account.accountName}</h5>
                                </div>
                                <button onClick={() => {
                                    handleRemoveAccount(account.id)
                                }}>Remove</button>
                            </div>
                        </Cards>
                    ))
                }
                </Scroll>
                <>
                    <Button text={'Add New Bank'} radius={0} width={198} clickHandle={handleRemove}/>
                </>
            </Form>
        </Container>
    </Bg>
  )
}

export default BankAccountList