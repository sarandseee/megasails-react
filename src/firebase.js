import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBzaCWt_Xz-rV2ZB68nfonRQKtc2UdJVMA",
  authDomain: "ms-react-app.firebaseapp.com",
  projectId: "ms-react-app",
  storageBucket: "ms-react-app.appspot.com",
  messagingSenderId: "177229408792",
  appId: "1:177229408792:web:a8b365974efdd6a603716d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//export const storage = getStorage(app);
