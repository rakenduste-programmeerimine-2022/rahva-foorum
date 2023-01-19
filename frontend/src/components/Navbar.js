import { Link, Navigate, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//Logging out
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [loginVisibility, setLoginVisibility] = useState(false);

  const toggleLogin = () => {
    setLoginVisibility(!loginVisibility);
  };
  const handleClick = () => {
    logout();
    Navigate("/");
    console.log("User sign-out successful!");
  };

  const handleClicks = () => {
    window.location.reload(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Rahva-foorum
      </Link>
      <ul>
        <nav className="navbar">
          {user && (
            <>
              <CustomLink to="/foorum">Foorum</CustomLink>

              <CustomLink to="/profile">Minu profiil</CustomLink>
              <CustomLink onClick={logout} to="/">
                Logout
              </CustomLink>
            </>
          )}
          {!user && (
            <>
              <CustomLink to="/login">Login</CustomLink>
              <CustomLink to="/register">Register</CustomLink>
            </>
          )}
        </nav>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
