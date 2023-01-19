import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCommentsContext } from "../hooks/useCommentContext";
import CommentDetails from "./CommentDetails";
import { useAuthContext } from "../hooks/useAuthContext";
const ShowComments = () => {
  const { comments, dispatch } = useCommentsContext();
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:8080/forum/posts/comments/${id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COMMENTS", payload: json });
      }
    };

    fetchComments();
  }, [dispatch, id]);

  return (
    <div>
      
        {comments &&
          [...comments]
            .reverse()
            .map((comment) => (
              <Stack spacing={2} m={2}>
                <Container sx={{ border: 2 }}>
                  <CommentDetails key={comment._id} comment={comment} />
                </Container>
              </Stack>
            ))}
      
    </div>
  );
};

export default ShowComments;
