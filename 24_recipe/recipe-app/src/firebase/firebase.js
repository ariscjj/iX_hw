// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzJ8lyVq8cVDUjvIY0nKHwLG_-1zEwaU4",
  authDomain: "recipes-5c950.firebaseapp.com",
  projectId: "recipes-5c950",
  storageBucket: "recipes-5c950.appspot.com",
  messagingSenderId: "622564578003",
  appId: "1:622564578003:web:5cd63c3b9f2d552ebd7a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//gets firestore database, initializes cloud firestore 
const db = getFirestore(app); 

export {
  db
};


