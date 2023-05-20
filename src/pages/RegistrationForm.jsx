import React from "react";

const PORT_SERVER = 5000;

const RegistrationForm = () => {
  const handleRegistration = () => {
    // Redirect the user to the Google authentication page
    window.location.href = `http://localhost:${PORT_SERVER}`;
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Registration Form</h1>
      <p>Please register using your Google account:</p>
      <button onClick={handleRegistration}>Register with Google</button>
    </div>
  );
};

export default RegistrationForm;
