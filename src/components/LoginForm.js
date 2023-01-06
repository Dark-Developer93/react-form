import React from "react";
import { TextField, Button } from "@material-ui/core";
import { auth } from "../utils/firebase"; // Import the Firebase auth object

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <p>{error}</p>}
      <Button type="submit">Log in</Button>
    </form>
  );
}

export default LoginForm;
