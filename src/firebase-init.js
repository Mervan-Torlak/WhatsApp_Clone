import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9-wq9zET0e1YOJzXkKY_cKd9agJWOTDg",
  authDomain: "wp-web-392708.firebaseapp.com",
  projectId: "wp-web-392708",
  storageBucket: "wp-web-392708.appspot.com",
  messagingSenderId: "615631514070",
  appId: "1:615631514070:web:ef83cc151040435f061c77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);

export { analytics }