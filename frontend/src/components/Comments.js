import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCommentsContext } from "../hooks/useCommentContext";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
//import CommentList from "./PostList";

const Comments = () => {
  const { dispatch } = useCommentsContext();
  const { user } = useAuthContext();
  const { id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };
  //<CommentList></CommentList>
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl required>
            <Input
              type="text"
              onChange={(e) => setCommentBody(e.target.value)}
              value={commentBody}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              width: 200,
              height: 50,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "green" },
            }}
            variant="contained"
          >
            Lisa kommentaar
          </Button>
        </FormGroup>
        {error && <Box>{error}</Box>}
      </form>
    </>
  );
};

export default Comments;
