// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: atob("QUl6YVN5QlYzemlySDh2dlhiWl9tekFDRlRGRHFmV1pOZzlnYUI0"),
  authDomain: atob("dm90ZS01MmYyZS5maXJlYmFzZWFwcC5jb20="),
  databaseURL: atob("aHR0cHM6Ly92b3RlLTUyZjJlLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbQ=="),
  projectId: atob("dm90ZS01MmYyZQ=="),
  storageBucket: atob("dm90ZS01MmYyZS5maXJlYmFzZXN0b3JhZ2UuYXBw"),
  messagingSenderId: atob("MTA3OTk0NjYxNDMzNw=="),
  appId: atob("MToxMDc5OTQ2NjE0MzM3OndlYjo2OTMxMzdiNjZlYzJjYmVmMGE5OGMw")
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
