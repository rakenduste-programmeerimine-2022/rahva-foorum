import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PostDetails = ({ post }) => {
  const { user } = useAuthContext();

  return (
    <div>
    <Container sx={{ border: 3 }} id="post">
        <Typography variant="h3" color="initial" class="date">
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </Typography>
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Pealkiri: {post.topic}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            Maakond: {post.title}
          </Typography>
        </div>
        <Typography variant="h3" color="initial" class="user">
          Postitaja: {post.postedBy}
        </Typography>
        <Typography variant="body1" color="initial" class="content">
          Teema: {post.text}
        </Typography>
      </Container>
    </div>
  );
};

export default PostDetails;
