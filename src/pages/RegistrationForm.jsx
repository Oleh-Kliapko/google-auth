import React from "react";
import { ReactComponent as Google } from "../google.svg";

const RegistrationForm = () => {
  const handleRegistration = () => {
    // Redirect the user to the Google authentication page
    window.location.href = `https://google-auth-bvk5.onrender.com`;
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Registration Form</h1>
      <p>Please register using your Google account:</p>
      <button
        onClick={handleRegistration}
        style={{ display: "flex", textAlign: "baseline" }}
      >
        Register with
        <Google style={{ paddingLeft: "2px", width: "12px", height: "auto" }} />
        oogle
      </button>
    </div>
  );
};

export default RegistrationForm;
