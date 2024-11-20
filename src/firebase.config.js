import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, connectAuthEmulator } from "firebase/auth";

// Use environment variables for sensitive information
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

// Optional: Connect to Firebase Authentication Emulator for local development
// Uncomment and adjust port if using local emulator
// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, 'http://localhost:9099');
// }

export { auth, RecaptchaVerifier };