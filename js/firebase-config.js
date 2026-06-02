// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBV3zirH8vvXbZ_mzACFTFDqfWZNg9gaB4",
  authDomain: "vote-52f2e.firebaseapp.com",
  databaseURL: "https://vote-52f2e-default-rtdb.firebaseio.com",
  projectId: "vote-52f2e",
  storageBucket: "vote-52f2e.firebasestorage.app",
  messagingSenderId: "1079946614337",
  appId: "1:1079946614337:web:693137b66ec2cbef0a98c0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
