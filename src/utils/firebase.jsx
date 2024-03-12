// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUcaGsMB8TSsDk9nL8prP6i0vz_nUhnIA",
  authDomain: "netflixgpt-6774d.firebaseapp.com",
  projectId: "netflixgpt-6774d",
  storageBucket: "netflixgpt-6774d.appspot.com",
  messagingSenderId: "673329713298",
  appId: "1:673329713298:web:a340b7c7b59f704508564b",
  measurementId: "G-YH8S8VW8ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()