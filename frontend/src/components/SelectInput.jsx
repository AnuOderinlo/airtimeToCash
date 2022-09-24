import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Form } from '../styles/ManageAccount'


const SelectInput = ({onChangeAction, label, value, selectionList, selectionDefault }) => {

  return (
      <Form>
        <label htmlFor='bank' className='h-label'>{label}</label>
        <div className='select'>
            <select name='bank' onChange={onChangeAction} value={value}>
                <option value={''}>{selectionDefault}</option>
                {
                    selectionList.map((bank) => (
                        <option key={bank.id} value={`${bank.name}`}>{bank.name}</option>
                    ))
                }
            </select>
            <RiArrowDropDownLine size={'30'} style={{backgroundColor:'white', marginRight:'33px'}}/>
            
        </div>
    </Form>
  )
}

export default SelectInput