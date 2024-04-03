import { firebase_app } from "@component/firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);


export async function signUp(email:string, password: any) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


export  async function signIn(email: string, password: any) {
  let result = null,
      error = null;
  try {
      result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
      error = e;
  }

  return { result, error };
}
