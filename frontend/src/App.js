import Navbar from "./components/Navbar.js"
import Mail from "./pages/Mail.js"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NewPost from "./pages/NewPost"
import Sidenav from './components/SideNav.js';
import './App.css';
import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore"

function App() {

  const [posts, setPosts] = useState([])

  /* function to get all posts from firestore in realtime */ 
  useEffect(() => {
    const q = query(collection(db, 'postitus'))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  });

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
        <Route path="/" element={<Home />}/>
        <Route path="/mail" element={<Mail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
      </main>
     
    </div>
    </>
  );
}

export default App;
