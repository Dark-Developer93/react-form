import { React, useState } from "react";
import { TextField, Button, Alert } from "@material-ui/core";
import { auth } from "../utils/firebase"; // Import the Firebase auth object

import "./LoginForm.css"; // Import the LoginForm.css file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
    });
  };

  return (
    // <form onSubmit={handleLogin} className="login-form fade-in">
    //   <TextField
    //     label="Email"
    //     type="email"
    //     value={email}
    //     onChange={(event) => setEmail(event.target.value)}
    //   />
    //   <TextField
    //     label="Password"
    //     type="password"
    //     value={password}
    //     onChange={(event) => setPassword(event.target.value)}
    //   />
    //   {error && <p>{error}</p>}
    //   <Button type="submit">Log in</Button>
    // </form>
    <div className="page-wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="form-control"
          placeholder="Email"
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control"
          placeholder="Password"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p>{error}</p>}
        <button className="btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
