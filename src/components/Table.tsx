import React, { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '../context/UserContext'
import { User } from '../types/user'

const TableUsers = styled.table`
    background-color:#f5e1ff;
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
        outline: 1px solid #f6eefa;
        padding: .7rem .5rem;
        font-weight: 400;
        color: #5a4c63;
    }
`

const BodyRow = styled.tr`
    background-color: {} ;
    & td{
        font-size: .9rem;
        outline: 1px solid #f6eefa;
        padding: .5rem .8rem; 
        font-weight: 300;
    }
`

const SelectedRow = styled(BodyRow)`
    background-color: #be68b7;
    color: #f8fff8;
`

const Table = () => {

    const {users, deleteUser, editUser, userIdActive} = useUser()

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
            {users.map(({id,fullName,address,email,phoneNumber}:User) => {
                const children = <>
                    <td>{fullName}</td>
                    <td>{address}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td style={{display:'flex', gap:'.6rem'}}>
                        <DeleteButton onClick={() => deleteUser(id)}>Delete</DeleteButton>
                        <EditButton onClick={() => editUser(id)}>Edit</EditButton>
                    </td>
                </>
                return (id===userIdActive?<SelectedRow key={id}>{children}</SelectedRow>:<BodyRow key={id}>{children}</BodyRow>)
                })
            }
        </tbody>
    </TableUsers>
  )
}

export default Table