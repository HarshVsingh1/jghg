import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyBMh5lo4x_Wx7BPMLTTX7JPnOytEd9QGMw",
  authDomain: "pashucare-b02ef.firebaseapp.com",
  projectId: "pashucare-b02ef",
  storageBucket: "pashucare-b02ef.firebasestorage.app",
  messagingSenderId: "330316219960",
  appId: "1:330316219960:web:5d6499f3273b0d759b08cd",
  measurementId: "G-JDB6ZRF6VF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app)
 console.log(auth)
export { auth };
