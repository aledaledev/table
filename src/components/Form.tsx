import React, { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '../context/UserContext'
import { FormState } from '../types/user'
import { Button } from './Table'

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
    background-color: #2b37e2;
    &:hover{
        border: 2px solid #0725ce;
    }
`

const UpdateButton = styled(Button)`
    background-color: #c313d3;
    &:hover{
        border: 2px solid #810a6d;
    }
`

const Form = () => {

  const {createNewUser, updateUser, updateUserData} = useUser()

  const [newUser, setNewUser] = useState<FormState['inputValues']>({
    fullName:'', 
    address:'',
    phoneNumber: '',
    email:''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(updateUser){
      updateUserData(newUser)
      setNewUser({
        fullName:'', 
        address:'',
        phoneNumber: '',
        email:''
    })
    } else {
      createNewUser(newUser)
      setNewUser({
          fullName:'', 
          address:'',
          phoneNumber: '',
          email:''
      })
      }
    }


  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })
  }

  return (
    <FormCreateUsers onSubmit={handleSubmit}>
        <input type="text" value={newUser.fullName} onChange={handleChange} name='fullName' placeholder='fullname' required={!updateUser}/>
        <input type="text" value={newUser.address} onChange={handleChange} name='address' placeholder='address' required={!updateUser}/>
        <input type="text" value={newUser.phoneNumber} onChange={handleChange} name='phoneNumber' placeholder='phone' required={!updateUser}/>
        <input type="text" value={newUser.email} onChange={handleChange} name='email' placeholder='email' required={!updateUser}/>
        {updateUser?<UpdateButton>Update User</UpdateButton>:<CreateButton>Create User</CreateButton>}
    </FormCreateUsers>
  )
}

export default Form