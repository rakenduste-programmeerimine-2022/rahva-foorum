import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

export default function Login() {
  let navigate = useNavigate();
  //muudab lehte ja refreshib
  function changeLocation(toGo) {
    navigate(toGo, { replace: true });
    window.location.reload();
  }

  // React States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError] = useState("");
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkVisible, setCheckVisible] = useState("password");
  const [helperText, setHelperText] = useState("");

  //const [state, dispatch] = useContext(Context)

  const handleSubmit = async (value) => {
    value.preventDefault();
    //set states to their initial state
    setRedirect(false);

    setErrorMsg("");

    const user = {
      name: name,
      email: email,
      password: password,
    };

    //axios fetch
    try {
      axios
        .post("http://localhost:8080/user/login", user)
        .then((res) => {
          console.log(res.data);
          if (res) {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);

            setRedirect(true);
            console.log("User sign-in successful!");
            setHelperText("Please fill all fields");
          } else {
            setErrorMsg("An11 user with this email does not exist!");
          }
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg("An22 user with this email does not exist");
        });
    } catch (error) {
      console.error(error);
      setErrorMsg("An33 user with this email does not exist");
    }
  };
  //send to main page
  if (redirect) {
    return changeLocation("/");
  }

  // Error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Login form
  const renderForm = (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
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

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sisse logimine</div>
        {isSubmitted ? <div>Oled juba kasutaja</div> : renderForm}
      </div>
    </div>
  );
}
