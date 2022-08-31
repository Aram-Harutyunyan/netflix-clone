// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9kcmK3gsipPwQpHVJjBgqW-7jpompg2I",
  authDomain: "netflix-clone-3f6e6.firebaseapp.com",
  projectId: "netflix-clone-3f6e6",
  storageBucket: "netflix-clone-3f6e6.appspot.com",
  messagingSenderId: "978220481396",
  appId: "1:978220481396:web:9c4960b9c365c4e86f8a21"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }