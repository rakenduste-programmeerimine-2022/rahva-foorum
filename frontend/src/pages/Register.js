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
      { 
      <>
      <Stack spacing={2} m={2}>
        <TextField
          sx={{
            width: 300
          }}
          required
          id="username"
          label="Kasutajanimi"
          handleChange={(e) => setName(e.target.value)}
          error={renderErrorMessage("uname")}
        />
        <TextField
          sx={{
            width: 300
          }}
          required
          id="email"
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
          error={renderErrorMessage("email")}
        />
        <TextField
          sx={{
            width: 300
          }}
          required
          id="password"
          label="Parool"
          type="password"
          autoComplete="current-password"
          handleChange={(e) => setPassword(e.target.value)}
          error={passwordError.length < 5, renderErrorMessage("pass")}
        />
        <Button
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
      </>
      }
        <div className="input-container">
          <label>Kasutajanimi</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Parool</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="pass"
            required
            error={passwordError.length < 5}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Registreeru</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Registreerumine</div>
        {isSubmitted ? <div>Oled juba kasutaja</div> : renderForm}
      </div>
    </div>
  );
}
