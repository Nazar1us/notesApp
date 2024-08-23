import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1NRmS7TQ_9BNXuwyZEo-7PXqqkhkao40",
  authDomain: "react-notes-935d7.firebaseapp.com",
  projectId: "react-notes-935d7",
  storageBucket: "react-notes-935d7.appspot.com",
  messagingSenderId: "3031402595",
  appId: "1:3031402595:web:15fd97056dc6cb3d335056",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
