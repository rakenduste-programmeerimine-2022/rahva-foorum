import { useState } from "react";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const PostForm = () => {
  const { dispatch } = useForumContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const Submit = async (e) => {
    e.preventDefault();
    let path = "/foorum";
    navigate(path);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const post = { topic, title, text };
    const postedBy = localStorage.getItem("name");
    const response = await fetch("http://localhost:8080/forum/post", {
      method: "POST",
      body: JSON.stringify(post, postedBy),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTopic("");
      setTitle("");
      setText("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_POST", payload: json });
    }
    window.location.reload();

    <Link to="/foorum"></Link>;
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>Add a Post</h3>
        <div className="input-container">
          <label>Topic:</label>
          <input
            value={topic}
            type="text"
            onChange={(e) => setTopic(e.target.value)}
            className={emptyFields.includes("topic") ? "error" : ""}
            required
          />
        </div>
        <div className="input-container">
          <label>Title:</label>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className={emptyFields.includes("title") ? "error" : ""}
            required
          />
        </div>
        <div className="input-container">
          <label>Text:</label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            className={emptyFields.includes("text") ? "error" : ""}
            required
          />
        </div>
        <div>
          <button>Post add</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
