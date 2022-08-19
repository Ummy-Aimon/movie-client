// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GsOQluuqN-_DnOj3ojKqHtVSUatEpgk",
  authDomain: "movie-app-ec267.firebaseapp.com",
  projectId: "movie-app-ec267",
  storageBucket: "movie-app-ec267.appspot.com",
  messagingSenderId: "556157381730",
  appId: "1:556157381730:web:f7d4685f47830b3c83f53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=  getAuth(app)
export default auth;