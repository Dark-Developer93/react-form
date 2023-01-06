import { db } from "./firebase"; // Import the Firebase Firestore object

// Function to save user data to the database
export function saveUserData(user) {
  db.collection("users").doc(user.uid).set({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    lastSignIn: Date.now(),
  });
}
