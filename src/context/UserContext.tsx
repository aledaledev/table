import { createContext, ReactNode, useContext, useState } from "react";
import usersData from '../data/users.json'
import { CreatedUser, User, UserContext as clientContext, UserProviderProps } from "../types/user";

const UserContext = createContext({} as clientContext)

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps) {

    const [users, setUsers] = useState<Array<User>>(usersData)

    const createNewUser = ({fullName,address,email,phoneNumber}:CreatedUser) => {
      setUsers([
        ...users,
        {
          id: Math.floor(Math.random()*1000),
          fullName, 
          address,
          phoneNumber,
          email
        }
      ])
    }

    const deleteUser = (id:Number) => {
      const deletedUser = users.filter(user => user.id!==id) 
      setUsers(deletedUser)
    }

    const editUser = (id:Number) => {
      
    }

    return <UserContext.Provider value={{ createNewUser, users, deleteUser, editUser }}>
            {children}
        </UserContext.Provider>
}