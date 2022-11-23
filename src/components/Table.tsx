import React, { useState } from 'react'
import styled from 'styled-components'
import usersData from '../data/users.json'

const TableUsers = styled.table`
    background-color:#f8f4fa;
    box-shadow: 0 0 18px 3px #69258b1c;
`

export const Button = styled.button`
    padding: .4rem;
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: 500;
    cursor:pointer;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: border .2s;
    color:white;
`

const DeleteButton = styled(Button)`
    background-color: #ff2e2e;

    &:hover{
        border: 2px solid #ce0707;
    }
`

const EditButton = styled(Button)`
    background-color: #4bee53;

    &:hover{
        border: 2px solid #26cf50;
    }
`

const HeadRow = styled.tr`
    background-color: #e8d5ff;
    & th{
        outline: 1px solid #cb88f1;
        padding: .7rem .5rem;
        font-weight: 400;
        color: #5a4c63;
    }
`

const BodyRow = styled.tr`
    & td{
        font-size: .9rem;
        outline: 1px solid #eee7f1;
        padding: .5rem .8rem; 
        font-weight: 300;
    }
`

export interface User {
    id: number
    fullName: string
    address:string
    email: string
    phoneNumber: string | number
}

export type CreatedUser = Omit<User, 'id'>


const Table = () => {

  const [users, setUsers] = useState<Array<User>>(usersData)

  return (
    <TableUsers>
        <thead>
            <HeadRow>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </HeadRow>
        </thead>
        <tbody>

            <BodyRow>
                <td>John</td>
                <td>CA Smith 44</td>
                <td>231-9127-7125</td>
                <td>johnancito@gmail.com</td>
                <td style={{display:'flex', gap:'.6rem'}}>
                    <DeleteButton>Delete</DeleteButton>
                    <EditButton>Edit</EditButton>
                </td>
            </BodyRow>
            {users.map(({id,fullName,address,email,phoneNumber}:User) => {
                return (
                    <BodyRow key={id}>
                    <td>{fullName}</td>
                    <td>{address}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td style={{display:'flex', gap:'.6rem'}}>
                        <DeleteButton>Delete</DeleteButton>
                        <EditButton>Edit</EditButton>
                    </td>
                    </BodyRow>)
                })
            }
        </tbody>
    </TableUsers>
  )
}

export default Table