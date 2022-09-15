// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6TvfTBXJb_zQJSCDQ3Xv46-sWEvJ2sM4",
  authDomain: "svelte-firebase-stack-demo-dev.firebaseapp.com",
  projectId: "svelte-firebase-stack-demo-dev",
  storageBucket: "svelte-firebase-stack-demo-dev.appspot.com",
  messagingSenderId: "423250384650",
  appId: "1:423250384650:web:a33ad78ad3eed3da1c0cf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);