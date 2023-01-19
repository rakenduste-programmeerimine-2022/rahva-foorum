import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";
// date fns
import moment from "moment";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { user } = useAuthContext();
  //console.log(post);
  const navigate = useNavigate();
  const detailsPage = () => {
    let path = "/newpost/" + post._id;
    navigate(path);
  };

  return (
    <div>
      <Container sx={{ border: 3 }} id="post">
        <Typography variant="h3" color="initial" class="date">
          {moment(post.createdAt).format("MMMM Do YYYY")}
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
          Postitaja: {post.user_id}
        </Typography>
        <Stack m={2}>
        <Button
          onClick={detailsPage}
            sx={{
              width: 200,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "green" },
            }}
            variant="contained"
            >
              Vaata postitust
        </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default PostDetails;
