import firebase from "firebase/app"; // Import the Firebase library
import "firebase/auth"; // Import the Firebase Auth library
import "firebase/firestore"; // Import the Firebase Firestore library

// Initialize Firebase with your project's credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

// Export the Firebase Auth object
export const auth = firebase.auth();

// Export the Firebase Firestore object
export const db = firebase.firestore();
