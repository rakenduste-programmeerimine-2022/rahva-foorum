import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSignup } from "../hooks/useSignup";
import { Snackbar, Alert, FormHelperText, Typography } from "@mui/material";
import { useLogout } from "../hooks/useLogout";
import { Stack, TextField, Button } from "@mui/material";

export default function Register() {
  // React States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const [passwordError] = useState("");
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { logout } = useLogout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRedirect(true);

    await signup(name, email, password);
    logout();
  };
  if (redirect) {
    return <Navigate to="/login" />;
  }

  // Error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Register form
  const renderForm = (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <Typography variant="h1" color="initial" class="heading">
          Registreeru kasutajaks
        </Typography>
        <Stack spacing={2} m={2}>
          <TextField
            sx={{

              width: 300,

            }}
            required
            id="username"
            label="Kasutajanimi"
            onChange={(e) => setName(e.target.value)}
          />
          {renderErrorMessage("uname")}
          <TextField
            sx={{

              width: 300,

            }}
            required
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMessage("email")}
          <TextField
            sx={{

              width: 300,

            }}
            required
            id="password"
            label="Parool"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
          <Button
            type="submit"
            sx={{
              width: 300,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "green" },
            }}
            variant="contained"

          >
            Registreeru

          </Button>
        </Stack>
      </form>
    </div>
  );

  return (
    <div className="app">
      {isSubmitted ? <div>Oled juba kasutaja</div> : renderForm}
    </div>
  );
}
