// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP7fCiZvdWYFzEq6JqEj7KfH_FSfacgmQ",
  authDomain: "name-of-your-project-62dbe.firebaseapp.com",
  projectId: "name-of-your-project-62dbe",
  storageBucket: "name-of-your-project-62dbe.appspot.com",
  messagingSenderId: "866395610360",
  appId: "1:866395610360:web:d4a95b7e45c79b1e616f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app