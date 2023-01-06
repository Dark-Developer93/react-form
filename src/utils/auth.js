import { auth } from "./firebase"; // Import the auth object
import { saveUserData } from "./user"; // Import the saveUserData function

// Sign up a new user with email and password
export function signUp(email, password) {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Save the user's data to the database
      saveUserData(user);
    })
    .catch((error) => {
      // An error occurred
    });
}

// Log in an existing user with email and password
export function logIn(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Save the user's data to the database
      saveUserData(user);
    })
    .catch((error) => {
      // An error occurred
    });
}
