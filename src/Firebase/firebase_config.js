// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbtCvulKD-Ag4tthRScWbF8i3N0jduX2s",
  authDomain: "foody-brands.firebaseapp.com",
  projectId: "foody-brands",
  storageBucket: "foody-brands.appspot.com",
  messagingSenderId: "502456401186",
  appId: "1:502456401186:web:d841886e4bba3a6a16f97b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app