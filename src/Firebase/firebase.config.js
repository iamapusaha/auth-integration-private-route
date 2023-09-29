// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5-Zv1JXcPMxt79hEBjy0dUzkTGjlKDWw",
    authDomain: "auth-integration-private-2b920.firebaseapp.com",
    projectId: "auth-integration-private-2b920",
    storageBucket: "auth-integration-private-2b920.appspot.com",
    messagingSenderId: "954142193806",
    appId: "1:954142193806:web:470a99d387e79ffd96b1df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;