import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, CreatedUser} from './Table'

const FormCreateUsers = styled.form`
    max-width: 15rem;
    margin: 2rem auto;
    background: linear-gradient(to bottom, #c1a1df, #cac8cc);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    border-radius: 5px;
    border: 1px solid #cb88f1;
    & input {
        padding: .8rem;
        font-size: .9rem;
        background-color: #f3e4f8;
        border: 1px solid #cb88f1;
        letter-spacing: 1px;
    }

    & input::placeholder{
        letter-spacing: 1px;
        color: #3d0f4b;
        font-weight: 300;
    }
`

const CreateButton = styled(Button)`
    background-color: blueviolet;
    &:hover{
        border: 2px solid #8f07ce;
    }
`

interface FormState {
    inputValues: CreatedUser
}

const Form = () => {

  const [newUser, setNewUser] = useState<FormState['inputValues']>({
    fullName:'',
    address:'',
    phoneNumber: 0,
    email:''
  })

  const handleSubmit = () => {}

  const handleChange = () => {}

  return (
    <FormCreateUsers onSubmit={handleSubmit}>
        <input type="text" value={newUser?.fullName} name='fullname' placeholder='fullname'/>
        <input type="text" value={newUser?.address} name='address' placeholder='address'/>
        <input type="number" value={newUser?.phoneNumber} name='phone' placeholder='phone'/>
        <input type="text" value={newUser?.email} name='email' placeholder='email'/>
        <CreateButton>Create User</CreateButton>
    </FormCreateUsers>
  )
}

export default Form