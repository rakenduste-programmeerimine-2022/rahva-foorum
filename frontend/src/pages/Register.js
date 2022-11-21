import React, { useState } from "react";

export default function Register() {

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
        username: "user1"
        },
        {
        username: "user2"
        }
    ];

    const errors = {
        uname: "invalid username",
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.username == uname.value) {
            // Username already exists
            setErrorMessages({ name: "uname", message: errors.uname });
          } else {
            setIsSubmitted(true);
          }
        }
      };
    
        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

        // JSX code for register form
        const renderForm = (
          <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email</label>
              <input type="text" name="email" required />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>Kasutajanimi</label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Parool</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="input-container">
              <label>Parool uuesti</label>
              <input type="password" name="pass" required />
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