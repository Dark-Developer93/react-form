import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { auth } from "../utils/firebase"; // Import the Firebase auth object
import FormTab from "./FormTab";
import AdminTab from "./AdminTab";

function AppTabs() {
  const [value, setValue] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    // Check if the user is an admin on mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          setIsAdmin(idTokenResult.claims.admin);
        });
      }
    });

    // Unsubscribe from the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Form" component={FormTab} />
      {isAdmin && <Tab label="Admin" component={AdminTab} />}
    </Tabs>
  );
}

export default AppTabs;
