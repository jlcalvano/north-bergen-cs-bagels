// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4DVtAtpIpOnbjGr8ovORDiYz1nou6J6M",
  authDomain: "north-bergen-cs-bagels.firebaseapp.com",
  projectId: "north-bergen-cs-bagels",
  storageBucket: "north-bergen-cs-bagels.appspot.com",
  messagingSenderId: "95951279223",
  appId: "1:95951279223:web:716b41b1d71a136755e272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };