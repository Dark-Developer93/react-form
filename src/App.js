import React from "react";
import { auth } from "./utils/firebase"; // Import the auth object
import AppTabs from "./components/AppTabs";
import UserData from "./components/UserData";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Subscribe to the auth state and set the user in the state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    // Unsubscribe from the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <>
          <AppTabs />
          <UserData />
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
