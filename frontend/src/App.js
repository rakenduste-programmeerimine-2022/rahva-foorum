import Navbar from "./components/Navbar.js"
import Mail from "./pages/Mail.js"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NewPost from "./pages/NewPost"
import Sidenav from './components/SideNav.js';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </div>
      <div className="App">
      <Sidenav/>
      <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/mail" element={<Mail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
      </main>
     
    </div>
      
    </>
    
    
  )
}



export default App