import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseApp = {
  apiKey: "AIzaSyAmzOw7_1wuFfBSd54zzM_78NacCVdKT48",
  authDomain: "agi-iot-beae7.firebaseapp.com",
  databaseURL:
    "https://agi-iot-beae7-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "agi-iot-beae7",
  storageBucket: "agi-iot-beae7.appspot.com",
  messagingSenderId: "990013555154",
  appId: "1:990013555154:web:5b0a8ed58d13f3ff43880b",
};

export const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseApp);
export const db = getDatabase(app);
export const firebaseAuth = getAuth(app);
