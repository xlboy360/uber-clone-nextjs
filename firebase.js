import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACHeRvTSoVerWHr4fdWakHoWFxlJlFdaw",
  authDomain: "uber-next-clone-live-31470.firebaseapp.com",
  projectId: "uber-next-clone-live-31470",
  storageBucket: "uber-next-clone-live-31470.appspot.com",
  messagingSenderId: "424765009757",
  appId: "1:424765009757:web:53fc87020166dc0f1482b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
