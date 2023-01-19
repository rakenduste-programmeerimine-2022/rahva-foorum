import { useState } from "react";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Stack, TextField, Button, Typography } from "@mui/material";

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
        <Typography variant="h1" color="initial" class="heading">
          Loo uus positus
        </Typography>
        <Stack spacing={2} m={2}>
          <TextField
            sx={{
              width: 300
            }}
            required
            id="topic"
            label="Kategooria"
            onChange={(e) => setTopic(e.target.value)}
            error={emptyFields.includes("topic") ? "error" : ""}
          />
          <TextField
            fullWidth
            required
            id="title"
            label="Pealkiri"
            onChange={(e) => setTitle(e.target.value)}
            error={emptyFields.includes("title") ? "error" : ""}
          />
          <TextField
            fullWidth
            required
            id="text"
            label="Tekst" /* MultiLine with rows: 2 and rowsMax: 4*/
            multiline
            minRows={6}
            maxRows={12}
            onChange={(e) => setText(e.target.value)}
            error={emptyFields.includes("text") ? "error" : ""}
          />
          <Button
            sx={{
              width: 300,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "green" },
            }}
            variant="contained"
            error={error && <div className="error">{error}</div>}
            >
              Lisa postitus
          </Button>
        </Stack>
        {/*
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
        */}
      </form>
    </div>
  );
};

export default PostForm;
