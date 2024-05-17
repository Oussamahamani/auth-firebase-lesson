// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMsyri_Qq3YtVPNt_G_qoBJ3EFbZPyluc",
  authDomain: "auth-lesson-1d5eb.firebaseapp.com",
  projectId: "auth-lesson-1d5eb",
  storageBucket: "auth-lesson-1d5eb.appspot.com",
  messagingSenderId: "951393133641",
  appId: "1:951393133641:web:7c19d96fba87195bafcb98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}