import { createContext, ReactNode, useContext, useState } from "react";
import usersData from '../data/users.json'

type UserProviderProps = {
    children: ReactNode
}

type UserContext = {
    toggleCart: () => void
    cartState: boolean
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number) => void
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity: number
}

export interface User {
  id: number
  fullName: string
  address:string
  email: string
  phoneNumber: string | number
}

export type CreatedUser = Omit<User, 'id'>

const UserContext = createContext({} as UserContext)

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps) {

    //const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart',[])

    const [users, setUsers] = useState<Array<User>>(usersData)

    const createNewUser = ({}) => {
      setUsers([
        ...users,
        {
          id: Math.floor(Math.random()*1000),
          fullName:'', 
          address:'',
          phoneNumber: '',
          email:''
        }
      ])
    }

    const [cartState, setToggleCart] = useState(false)

    const toggleCart = () => {
        setToggleCart(!cartState)
    }

    return <UserContext.Provider value={{ toggleCart, cartState}}>
            {children}
        </UserContext.Provider>
}