// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy_pnvddG9Fo1pqLIpPKUHGRO9BrwXuDQ",
    authDomain: "netflixgpt-e5956.firebaseapp.com",
    projectId: "netflixgpt-e5956",
    storageBucket: "netflixgpt-e5956.appspot.com",
    messagingSenderId: "1084235283332",
    appId: "1:1084235283332:web:0e28582c21deee630a7bd1",
    measurementId: "G-EJQZSF9L7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();