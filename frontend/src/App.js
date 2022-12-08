import Navbar from "./components/Navbar.js"
import Mail from "./pages/Mail.js"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NewPost from "./pages/NewPost"
import ChatRoom from "./pages/ChatRoom"
import Sidenav from './components/SideNav.js';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <Sidenav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </div>
    </>
    
    
  )
}



export default App