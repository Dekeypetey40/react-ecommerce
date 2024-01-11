import React, { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <Alert show={showAlert} onClose={handleClose} color="danger">
        Alert! Alert!
      </Alert>
      <Button onClick={handleClick}>Show Alert</Button>
    </div>
  );
}

export default App;
