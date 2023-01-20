import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCommentsContext } from "../hooks/useCommentContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

//import CommentList from "./PostList";

const Comments = ({ post }) => {
  const { dispatch } = useCommentsContext();
  const { user } = useAuthContext();
  const { id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();
  const detailsPage = () => {
    let path = "/newpost/" + post._id;
    navigate(path);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRedirect(true);

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const comment = { id, commentBody };

    const response = await fetch(
      `http://localhost:8080/forum/posts/:id/comment`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setCommentBody("");
      setError(null);
      dispatch({ type: "CREATE_COMMENT", payload: json });
    }
    //window.location.reload();
    if (redirect) {
      return <Navigate to="/foorum" />;
    }

    let path = "/foorum";
    navigate(path);
  };
  //<CommentList></CommentList>
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <TextField
          placeholder="Sisesta kommentaar" /* MultiLine with rows: 2 and rowsMax: 4*/
          type="text"
          onChange={(e) => setCommentBody(e.target.value)}
          value={commentBody}
          multiline
          rows={2}
          maxRows={4}
          fullWidth
        />
        <Button
          type="submit"
          sx={{
            float: "right",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "green" },
          }}
          variant="contained"
        >
          Lisa kommentaar
        </Button>
      </Container>
      {error && <Box>{error}</Box>}
    </form>
  );
};

export default Comments;
