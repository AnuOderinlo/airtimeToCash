import React, {useState} from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { Bg, Container, Form } from '../styles/ManageAccount'
import MessageAlertModal from '../components/MessageAlertModal'
import BankAccountList from './BankAccountList'
import SelectInput from '../components/SelectInput'


const ManageAccount = () => {
    const [inputs, setInputs] = useState({ bank: '', accountName: '', accountNumber: '' })
    const [showModal, setShowModal] = useState(false)
    const [viewAccount, setViewAccount] = useState(false)

    const handleInput = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = () => {
        console.log(inputs)
        openModal()
    }

    const openModal = () => {
        setShowModal((prev) => !prev)
    }

    const handleView = (e) => {
        e.preventDefault()
        setViewAccount((prev) => !prev)
    }
 
  return (
    <>
        { !viewAccount ?
            <Bg>
                <Container>
                    <Form>
                        <div className='acount-headers'>
                            <h3>Bank Account</h3>
                            <h4 onClick={handleView}>View Bank accounts</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <SelectInput onChangeAction={handleInput} label={'Bank Name'} value={inputs.bank || ''}/>
                            <InputField label={'Account Name'} placeholder={'Account name'} name={'accountName'} value={inputs.accountName || ''} changeHandle={handleInput} />
                            <InputField label={'Account Number'} placeholder={'Account number'} name={'accountNumber'} value={inputs.accountNumber || ''} changeHandle={handleInput} />

                            <Button text={'Add Bank'} radius={0} width={198} clickHandle={handleSubmit} />
                        </form>
                    </Form>
                    {showModal && <MessageAlertModal showModal={showModal} setShowModal={setShowModal}/> }
                </Container>
            </Bg>  :
            <BankAccountList />
        }
       
    </>
  )
}

export default ManageAccount