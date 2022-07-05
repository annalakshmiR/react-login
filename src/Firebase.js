import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeRZeKEuxo8ayNhbFDEgcP40A9FJuIP7s",
  authDomain: "react-auth-a8f89.firebaseapp.com",
  projectId: "react-auth-a8f89",
  storageBucket: "react-auth-a8f89.appspot.com",
  messagingSenderId: "17603942782",
  appId: "1:17603942782:web:ad82a2198ddf3a4c457b2f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth}