import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXltZG9onpAg1O5A9AhBL5chWVHvMdAmM",
  authDomain: "shoutouts-gc.firebaseapp.com",
  projectId: "shoutouts-gc",
  storageBucket: "shoutouts-gc.appspot.com",
  messagingSenderId: "1091085380366",
  appId: "1:1091085380366:web:27d6b7a5c49490192e855f",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
export const storage = getStorage(app);
