import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";

const Login = () => {
  // React States

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [passwordError] = useState("");
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRedirect(true);

    await login(name, email, password);
  };
  if (redirect) {
    return <Navigate to="/" />;
  }

  //const [state, dispatch] = useContext(Context)

  // Error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Login form
  return (
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
            Logi sisse
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
          <button type="submit">Logi sisse</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
