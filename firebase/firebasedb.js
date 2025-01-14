// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(firebase);

export default firebase;
export { analytics, firestore };