import React, { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    userData: null | UserData,
    setUserData: (userData: UserData) => void
}
  
export const AppContext = createContext({} as IAppContext)

interface IAppContextProvider {
    children?: React.ReactNode
}

export interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

export const AppContextProvider = ({ children }: IAppContextProvider) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ userData, setUserData ] = useState<null | UserData>(null)

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, user } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
        { children }
      </AppContext.Provider>
    )
}
