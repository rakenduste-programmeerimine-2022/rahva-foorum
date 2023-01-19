import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ForumContextProvider } from "./context/ForumContext";
import { CommentsContextProvider } from "./context/CommentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CommentsContextProvider>
      <ForumContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ForumContextProvider>
    </CommentsContextProvider>
  </React.StrictMode>
);
