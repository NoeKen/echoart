// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgzTFHDEB_9UOD1k07AZmr2fpxiBzAH8",
  authDomain: "echoart-e9b9b.firebaseapp.com",
  projectId: "echoart-e9b9b",
  storageBucket: "echoart-e9b9b.appspot.com",
  messagingSenderId: "367987900224",
  appId: "1:367987900224:web:9267c32e1e8a6a7a2d44a5",
  measurementId: "G-PKBJ4LPDYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const dbStorage = getStorage(app);

export { db, dbStorage, analytics };