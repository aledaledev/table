type UserProviderProps = {
    children: ReactNode
}
export interface User {
  id: number
  fullName: string
  address:string
  email: string
  phoneNumber: string | number
}

export type CreatedUser = Omit<User, 'id'>

type UserContext = {
  createNewUser: ({fullName,address,email,phoneNumber}:CreatedUser) => void,
  users: User[],
  deleteUser: (id:number) => void
  editUser: (id:number) => void
  userIdActive: number | null
  updateUser: boolean
  updateUserData: ({fullName,address,email,phoneNumber}:Partial<CreatedUser>) => void,
}


interface FormState {
    inputValues: CreatedUser
}