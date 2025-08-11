// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyAtkocbe20ALsG6bGucsObY-mkPWrX17PY",
  authDomain: "healthcare-service-app.firebaseapp.com",
  projectId: "healthcare-service-app",
  storageBucket: "healthcare-service-app.appspot.com",
  messagingSenderId: "1023129059122",
  appId: "1:1023129059122:web:eae4b5e749b1e7a42c612b",
  measurementId: "G-8DZ1762158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;