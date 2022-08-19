// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDRU1KHHXsn1zNur4l4cCO8YQbHahCzkqI",
  authDomain: "login-project-23e96.firebaseapp.com",
  projectId: "login-project-23e96",
  storageBucket: "login-project-23e96.appspot.com",
  messagingSenderId: "947533888154",
  appId: "1:947533888154:web:c1bbb316bad9502e127d23",
  measurementId: "G-446LVQ1K4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
