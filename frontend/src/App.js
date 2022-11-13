import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Getting data from db:
          {posts[0] != null &&
            posts[0].data.asukoht
          }
        </p>
      </header>
    </div>
  );
}

export default App;
