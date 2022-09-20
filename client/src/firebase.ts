import { PUBLIC_USE_EMULATORS, PUBLIC_FIREBASE_CONFIG } from "$env/static/public";
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig: FirebaseOptions;

if (PUBLIC_FIREBASE_CONFIG === "staging") {
  firebaseConfig = {
    apiKey: "AIzaSyA6TvfTBXJb_zQJSCDQ3Xv46-sWEvJ2sM4",
    authDomain: "svelte-firebase-stack-demo-dev.firebaseapp.com",
    projectId: "svelte-firebase-stack-demo-dev",
    storageBucket: "svelte-firebase-stack-demo-dev.appspot.com",
    messagingSenderId: "423250384650",
    appId: "1:423250384650:web:a33ad78ad3eed3da1c0cf3",
  };
} else if (PUBLIC_FIREBASE_CONFIG === "production") {
  firebaseConfig = {
    apiKey: "AIzaSyAbyxTszmLYWZGQD3gz-CGdjrNTVQo8ZLI",
    authDomain: "svelte-firebase-stack-demo.firebaseapp.com",
    projectId: "svelte-firebase-stack-demo",
    storageBucket: "svelte-firebase-stack-demo.appspot.com",
    messagingSenderId: "414883969000",
    appId: "1:414883969000:web:e3e7ef0e44d0f3610bd65d",
  };
} else {
  throw new Error("Invalid PUBLIC_FIREBASE_CONFIG");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

if (PUBLIC_USE_EMULATORS === "true") {
  connectFirestoreEmulator(db, "localhost", 8080);
}
