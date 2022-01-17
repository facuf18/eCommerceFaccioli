import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuDDbTLhcqfBYwg27e1vbXp1kdj94PEow",
  authDomain: "sololevelingtest.firebaseapp.com",
  projectId: "sololevelingtest",
  storageBucket: "sololevelingtest.appspot.com",
  messagingSenderId: "1000508656510",
  appId: "1:1000508656510:web:6f30fcce4ad0c6f36b412f",
  measurementId: "G-95FWMXDJR4"
}

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);