import React from 'react'
import styled from 'styled-components'

const TableUsers = styled.table`
    
`

const Button = styled.button`
    padding: .5rem;
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: 500;
`

const Table = () => {
  return (
    <TableUsers>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>CA Smith 44</td>
                <td>23 11231225</td>
                <td>johnancito@gmail.com</td>
                <td>
                    <Button delete>Delete</Button>
                    <Button edit>Edit</Button>
                </td>
            </tr>
        </tbody>
    </TableUsers>
  )
}

export default Table