// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY24ER1XR0DkNj5dcvQ9kxi0fpYfl7pc4",
  authDomain: "intern-portal-81439.firebaseapp.com",
  projectId: "intern-portal-81439",
  storageBucket: "intern-portal-81439.firebasestorage.app",
  messagingSenderId: "140275796168",
  appId: "1:140275796168:web:fb1440ea0bb1ab28e4fdfd",
  measurementId: "G-MBS83X0QCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export { auth, provider };