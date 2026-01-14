// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhq3skS3dYm4QSGkUYuHsEixmSW7GWod8",
    authDomain: "sushrutha-s-kottary.firebaseapp.com",
    projectId: "sushrutha-s-kottary",
    storageBucket: "sushrutha-s-kottary.firebasestorage.app",
    messagingSenderId: "574931133016",
    appId: "1:574931133016:web:8b4c2b88e51ba87cb2a02d",
    measurementId: "G-BF4GNZZR55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
