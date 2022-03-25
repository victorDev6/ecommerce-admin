// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXu3yVyaVK0unx_384uwUvlhvBc1CzrI",
  authDomain: "sistema-reactjs.firebaseapp.com",
  projectId: "sistema-reactjs",
  storageBucket: "sistema-reactjs.appspot.com",
  messagingSenderId: "987959264934",
  appId: "1:987959264934:web:485787ad6f1db500145667",
  measurementId: "G-C93PQ1599V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;