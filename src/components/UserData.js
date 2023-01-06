import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore"; // Import the useDocumentData hook
import { db, auth } from "../utils/firebase"; // Import the Firebase Firestore object
import { Paper, Typography } from "@material-ui/core";

function UserData() {
  const [userData, loading, error] = useDocumentData(
    db.collection("users").doc(auth.currentUser.uid) // Get the current user's data
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Paper>
      <Typography variant="h5">User Data</Typography>
      <Typography>First Name: {userData.firstName}</Typography>
      <Typography>Last Name: {userData.lastName}</Typography>
      <Typography>Email: {userData.email}</Typography>
      <Typography>
        Last Sign In: {new Date(userData.lastSignIn).toString()}
      </Typography>
    </Paper>
  );
}

export default UserData;
