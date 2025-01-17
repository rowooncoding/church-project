// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGEINGSENDERID,
    appId: NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
// Firebase 초기화 방지
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export default { app, db, auth };