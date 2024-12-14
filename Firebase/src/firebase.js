// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwMmSYltrvq6njHvLSwCKO5Wse3X-_Bg",
  authDomain: "learnfirebase-71d1d.firebaseapp.com",
  projectId: "learnfirebase-71d1d",
  storageBucket: "learnfirebase-71d1d.firebasestorage.app",
  messagingSenderId: "657355304021",
  appId: "1:657355304021:web:f55f89f5f1d38adef2b8dc",
  measurementId: "G-HTC7Y1P8CR",
  databaseURL : "https://learnfirebase-71d1d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
