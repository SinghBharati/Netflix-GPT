// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUeZ1UyYYJbYWSlsAlQZ117DLv0AsB-go",
    authDomain: "netflixgpt-5cee1.firebaseapp.com",
    projectId: "netflixgpt-5cee1",
    storageBucket: "netflixgpt-5cee1.appspot.com",
    messagingSenderId: "842271162702",
    appId: "1:842271162702:web:39f163b0a34eb54ce75e1f",
    measurementId: "G-FJ6KXHCWMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
