import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { Stack, TextField, Button, Typography } from "@mui/material";


const Login = () => {
  // React States

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [errorMessages] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    console.log("login")
    e.preventDefault();
    setRedirect(true);

    await login(name, email, password);
  };
  if (redirect) {
    return <Navigate to="/" />;
  }

  // Error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Login form
  return (
    <div className="app">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <Typography variant="h1" color="initial" class="heading">
            Logi sisse
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
              /*error={renderErrorMessage("uname")}*/
            />
            <TextField
              sx={{
                width: 300,
              }}
              required
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              /*error={renderErrorMessage("email")}*/
            />
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
              /*error={passwordError.length < 5, renderErrorMessage("pass")}*/
            />
            <Button
              type="submit"

              sx={{
                width: 300,
                backgroundColor: "black",
                "&:hover": { backgroundColor: "green" },
              }}
              variant="contained"

            >
              Logi sisse

            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};
export default Login;
