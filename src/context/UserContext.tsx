import { createContext, ReactNode, useContext, useState } from "react";
import usersData from '../data/users.json'
import { CreatedUser, User, UserContext as clientContext, UserProviderProps } from "../types/user";

const UserContext = createContext({} as clientContext)

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps) {

    const [users, setUsers] = useState<Array<User>>(usersData)

    const [userIdActive, setUserIdActive] = useState<number>(0)

    const [updateUser, setUpdateUser] = useState(false)

    const createNewUser = ({fullName,address,email,phoneNumber}:CreatedUser) => {
      setUsers([
        ...users,
        {
          id: Math.floor(Math.random()*10000),
          fullName, 
          address,
          phoneNumber,
          email
        }
      ])
    }

    const deleteUser = (id:number) => {
      const deletedUser = users.filter(user => user.id!==id) 
      setUsers(deletedUser)
      if(id === userIdActive) {
        setUserIdActive(0) 
        setUpdateUser(false)
      }
    }

    const editUser = (id: number) => {
      if (id === userIdActive) {
        setUserIdActive(0) 
        setUpdateUser(false)
      } else {
        setUserIdActive(id)
        setUpdateUser(true)
      }
    }

    const updateUserData = ({fullName,address,email,phoneNumber}:Partial<CreatedUser>) => {
      const userData = users.find(user => user.id === userIdActive) as User
      const userIndex = users.findIndex(user => user.id === userIdActive)
      const usersData = [...users]
      usersData[userIndex] = {
        id: userIdActive,
        fullName: fullName?fullName:userData.fullName,
        address: address?address:userData.address,
        email: email?email:userData.email,
        phoneNumber: phoneNumber?phoneNumber:userData.phoneNumber,
      }
      setUsers(usersData)
      setUserIdActive(0) 
      setUpdateUser(false)
    }

    return <UserContext.Provider value={{ createNewUser, users, deleteUser, editUser, userIdActive, updateUser ,updateUserData }}>
            {children}
        </UserContext.Provider>
}