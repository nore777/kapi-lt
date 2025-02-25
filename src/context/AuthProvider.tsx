'use client'
import React, { useState, useEffect, useContext, createContext } from "react";
import getUser from "./getUser";
import removeUser from "./removeUser";

interface IAuthContext {
  login: () => Promise<void>,
  logout: () => Promise<void>,
  isLoggedIn: boolean,
  userData: IUserData,
}

interface IUserData {
  id: string,
  username: string,
  roles: string[]
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<IAuthContext>({
  login: async () => { },
  logout: async () => { },
  isLoggedIn: false,
  userData: {
    id: '',
    username: '',
    roles: ['']
  }
})

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userData, setUserData] = useState<IUserData>({ id: '', username: '', roles: [''] })
  const [loading, setLoading] = useState<boolean>(true)

  async function login() {
    const user = await getUser()
    setIsLoggedIn(user.isLoggedIn)
    setUserData({ id: user.userData.id as string, username: user.userData.username as string, roles: user.userData.roles as string[] })
    setLoading(false)
  }

  async function logout() {
    await removeUser()
    setIsLoggedIn(false)
  }

  useEffect(() => {
    login()
  }, [])

  if (loading) return <></>

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, userData }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)
export default AuthProvider
