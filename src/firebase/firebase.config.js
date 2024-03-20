// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhWmrl7_MKoKhf6Jl4qFSmDunlnay1GuY",
  authDomain: "auth-moha-milon-1677d.firebaseapp.com",
  projectId: "auth-moha-milon-1677d",
  storageBucket: "auth-moha-milon-1677d.appspot.com",
  messagingSenderId: "58307194385",
  appId: "1:58307194385:web:abd93bb0a233a5660c4bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;