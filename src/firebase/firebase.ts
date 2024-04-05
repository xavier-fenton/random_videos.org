// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function emulatorCheck(){
  return process.env.NEXT_PUBLIC_EMULATOR === 'true';
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: emulatorCheck() ? 'localhost:9099' : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const auth = getAuth(firebase_app)
export const firestore = getFirestore(firebase_app)
export const storage = getStorage(firebase_app)

// Connect to Firebase Authentication emulator if emulator is being used
if (emulatorCheck()) {
  connectAuthEmulator(auth, 'http://localhost:9099');
}

if (emulatorCheck()) {
  connectFirestoreEmulator(firestore, 'localhost', 8080)

}

if (emulatorCheck()) {
  connectStorageEmulator(storage, 'localhost', 9199)

}