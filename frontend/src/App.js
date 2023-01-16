import Navbar from "./components/Navbar.js";
import Mail from "./pages/Mail.js";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Foorum from "./pages/Foorum";
import Sidenav from "./components/SideNav.js";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewPost from "./pages/NewPost.js";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/foorum" element={<Foorum />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
