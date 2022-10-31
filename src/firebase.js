import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdeUXurUc56U2ykOGyUUfniTkF_LvLgRE",
  authDomain: "chat-app-react-a11c7.firebaseapp.com",
  projectId: "chat-app-react-a11c7",
  storageBucket: "chat-app-react-a11c7.appspot.com",
  messagingSenderId: "896557043600",
  appId: "1:896557043600:web:ecd3b23a399b5b31522d15"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()