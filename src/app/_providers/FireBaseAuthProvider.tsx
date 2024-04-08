import firebase from 'firebase/compat/app'
import { auth } from '@component/firebase/firebase'
import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

type FireBaseAuthProviderProps = {
  children: ReactNode
}

export type FireAuthContext = {
  user: firebase.User | null
}


const FireAuthContext = createContext({} as FireAuthContext)

export function useFireBaseAuth() {
  return useContext(FireAuthContext)
}

export function FireBaseAuthProvider({ children }: FireBaseAuthProviderProps) {
  const [user, setUser] = useState<firebase.User| null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(firebaseUser:any) => {
      setUser(await firebaseUser);
      console.log(firebaseUser);
      
    });

    return () => unsubscribe();
  }, []);

  

  
  
  return (
    <FireAuthContext.Provider value={{ user }}>{children}</FireAuthContext.Provider>
  )
}
