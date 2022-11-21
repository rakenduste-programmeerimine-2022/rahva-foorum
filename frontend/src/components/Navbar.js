import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState, useEffect } from "react";
import "../styles.css"


export default function Navbar() {

  const [loginVisibility, setLoginVisibility] = useState(false)

  const toggleLogin = () => {
    setLoginVisibility(!loginVisibility)
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Rahva-foorum
      </Link>
      <ul>
        <CustomLink to="/mail">Postkast</CustomLink>
        <CustomLink to="/profile">Minu profiil</CustomLink>
        
        {loginVisibility ?
            <CustomLink onClick={toggleLogin}>Logi sisse</CustomLink>
          :
          <li>
          <CustomLink onClick={toggleLogin}>Logi sisse</CustomLink>
          <div className="login-form">
              <form >
                <div className="input-container">
                  <label>Kasutajanimi</label>
                  <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                  <label>Parool</label>
                  <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                  <button type="submit" onClick={toggleLogin}>Sisene</button>
                </div>
                <br/>
                <div className="bottom-container">
                  <CustomLink to="/reset" onClick={toggleLogin}>Unustasin salasõna</CustomLink>
                  <br/>
                  <CustomLink to="/register" onClick={toggleLogin}>Ei ole kasutajat? Registreeru nüüd.</CustomLink>
                </div>
              </form>
          </div>
          </li>
          }
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}



