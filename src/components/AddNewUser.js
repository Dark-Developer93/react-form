import React, { useState } from "react";
import { db, auth } from "../utils/firebase"; // Import the Firebase Firestore and auth objects
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddNewUser({ onClose }) {
  const [firstName, setFirstName] = useState(""); // State variable to store the first name
  const [lastName, setLastName] = useState(""); // State variable to store the last name
  const [email, setEmail] = useState(""); // State variable to store the email
  const [password, setPassword] = useState(""); // State variable to store the password

  function handleSubmit(event) {
    event.preventDefault();

    // Sign up a new user with the provided email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Save the user's data to the database
        db.collection("users").doc(user.uid).set({
          firstName,
          lastName,
          email,
          lastSignIn: Date.now(),
        });
      })
      .then(() => {
        // Close the form
        onClose();
      })
      .catch((error) => {
        // An error occurred
      });
  }

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
          />
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewUser;
