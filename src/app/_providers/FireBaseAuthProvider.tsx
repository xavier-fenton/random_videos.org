import { auth } from '@component/firebase/firebase'
import { createContext, useContext, ReactNode, useState } from 'react'
import { useAuthState } from '../_hooks/useAuthState'
type FireBaseAuthProviderProps = {
  children: ReactNode
}

type FireAuthContext = {
  user: {
    email: string
  }
}

const FireAuthContext = createContext({} as FireAuthContext)

export function useFireBaseAuth() {
  return useContext(FireAuthContext)
}

export function FireBaseAuthProvider({ children }: FireBaseAuthProviderProps) {
  const user: any = useAuthState()


  
  
  return (
    <FireAuthContext.Provider value={{user}}>{children}</FireAuthContext.Provider>
  )
}
