import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
// import Form from "@material-ui/core/Form";
import Button from "@material-ui/core/Button";
import { db } from "../utils/firebase"; // Import the Firebase Firestore object

function FormTab() {
  const [question1, setQuestion1] = React.useState("");
  const [question2, setQuestion2] = React.useState("");
  const [question3, setQuestion3] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the form data to a new document in the 'forms' collection
    db.collection("forms")
      .add({
        question1,
        question2,
        question3,
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Question 1</FormLabel>
        <RadioGroup
          value={question1}
          onChange={(event) => setQuestion1(event.target.value)}
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Question 2</FormLabel>
        <RadioGroup
          value={question2}
          onChange={(event) => setQuestion2(event.target.value)}
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Question 3</FormLabel>
        <RadioGroup
          value={question3}
          onChange={(event) => setQuestion3(event.target.value)}
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      </FormControl>
      {error && <p>{error}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default FormTab;
