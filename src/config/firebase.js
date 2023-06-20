import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyB6FcNIg2pxYE3oiGwq1eH6HqtyLBETfwk",
    authDomain: "react-authentication-357fb.firebaseapp.com",
    projectId: "react-authentication-357fb",
    storageBucket: "react-authentication-357fb.appspot.com",
    messagingSenderId: "614800259347",
    appId: "1:614800259347:web:6e4115092cd38939a082e6",
    measurementId: "G-K0F53TKBPF"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);


