import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment";
import Comments from "../components/Comments";
import ShowComments from "../components/ShowComments";
import { PropTypes } from "prop-types";
//const Comment =(comment)

const Post = (post) => {
  const { posts, dispatch } = useForumContext();
  const { id } = useParams();
  const { user } = useAuthContext();
  let postTopic = posts.topic;
  let postTitle = posts.title;
  let postText = posts.text;

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
    //{moment(posts.createdAt).format("MMMM Do YYYY")}
    <div>
      <Container sx={{ border: 3 }} id="post">
        <Typography variant="h3" color="initial" class="date">
          {moment(post.createdAt).format("MMMM Do YYYY ")}
        </Typography>
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Pealkiri:{postTopic}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            {postTitle}
          </Typography>
        </div>
        <Typography variant="h2" color="initial" class="user">
          Kasutaja: {posts.user_id}
        </Typography>
        <Typography variant="body1" color="initial" class="content">
          {postText}
        </Typography>
      </Container>

      <Container sx={{ border: 1 }} id="post">
        <Stack>
          <ShowComments />
          <Container>
            <Comments />
          </Container>
        </Stack>
      </Container>
    </div>
  );
};
Post.propTypes = {
  postTopic: PropTypes.string,
  postTitle: PropTypes.string,
  postText: PropTypes.string,
};
export default Post;
