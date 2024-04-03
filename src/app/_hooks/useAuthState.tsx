import { useState, useEffect } from 'react';
import { auth } from '@component/firebase/firebase'; // Import your Firebase auth object

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser:any) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
