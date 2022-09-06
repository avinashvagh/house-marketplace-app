import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfqqHs2lS0A3QursnUzMrCKog0sAJ2xo0",
  authDomain: "house-marketplace-app-fc70b.firebaseapp.com",
  projectId: "house-marketplace-app-fc70b",
  storageBucket: "house-marketplace-app-fc70b.appspot.com",
  messagingSenderId: "162599396447",
  appId: "1:162599396447:web:d5e8f316e38e05929867ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore()
