// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaioQv8ntaxJInDacEDxbo0eRMHUJXBvE",
  authDomain: "netflix-f-clone.firebaseapp.com",
  projectId: "netflix-f-clone",
  storageBucket: "netflix-f-clone.firebasestorage.app",
  messagingSenderId: "652646964515",
  appId: "1:652646964515:web:d907dd62dc097c64d10096",
  measurementId: "G-37JWZGZLK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
