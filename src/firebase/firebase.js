import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvPXLFmhZ_Xl4Xl-_cQ2YeI7DMY8EarlU",
  authDomain: "tripplanner-230c0.firebaseapp.com",
  projectId: "tripplanner-230c0",
  storageBucket: "tripplanner-230c0.firebasestorage.app",
  messagingSenderId: "555860767498",
  appId: "1:555860767498:web:62efa76302acf23ee240f3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);