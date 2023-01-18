import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForumContext } from "../hooks/useForumContext";
import PostDetails from "../components/PostDetails";
import { useAuthContext } from "../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import moment from "moment";
import Comments from "../components/Comments";
import ShowComments from "../components/ShowComments";
//const Comment =(comment)
const Post = (post) => {
  const { posts, dispatch } = useForumContext();
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPostById = async () => {
      const response = await fetch(`http://localhost:8080/forum/posts/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POST_BY_ID", payload: json });
      }
    };
    fetchPostById();
  }, [dispatch, id]);
  return (
    //posts created at tuleb lisada!!
    //{moment(posts.createdAt).format("MMMM Do YYYY")}
    <>
      <Container sx={{ border: 3 }} id="post">
        <Typography variant="h3" color="initial" class="date"></Typography>
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Pealkiri:{posts.topic}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            {posts.title}
          </Typography>
        </div>
        <Typography variant="h3" color="initial" class="user">
          Kasutaja: {posts.user_id}
        </Typography>
        <Typography variant="body1" color="initial" class="content">
          {posts.text}
        </Typography>
      </Container>
      <Button
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
      <Comments />
      <ShowComments />
    </>
  );
};
export default Post;
