import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase"; // Import the Firebase Firestore object
import AddNewUser from "./AddNewUser"; // Import the AddNewUser form
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

function AdminTab() {
  const [users, setUsers] = useState([]); // State variable to store the list of users
  const [showForm, setShowForm] = useState(false); // State variable to store the form visibility

  useEffect(() => {
    // Listen for changes to the users collection
    const unsubscribe = db.collection("users").onSnapshot((snapshot) => {
      const newUsers = [];
      snapshot.forEach((doc) => {
        newUsers.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUsers(newUsers);
    });

    return unsubscribe;
  }, []);

  // Function to show the AddNewUser form
  function handleShowForm() {
    setShowForm(true);
  }

  // Function to hide the AddNewUser form
  function handleCloseForm() {
    setShowForm(false);
  }

  return (
    <div>
      <Button onClick={handleShowForm}>Add New User</Button>
      {showForm && <AddNewUser onClose={handleCloseForm} />}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Last Sign In</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.lastSignIn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminTab;
