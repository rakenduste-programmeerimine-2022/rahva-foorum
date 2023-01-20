import { Container, Typography, Button, Stack } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PostDetails = ({ post }) => {
  const { user } = useAuthContext();
  let postTopic = post.topic;
  let postTitle = post.title;
  //let postText = post.text;
  const navigate = useNavigate();
  const detailsPage = () => {
    let path = "/newpost/" + post._id;
    navigate(path);
  };

  return (
    <div>
      <Container sx={{ border: 3 }} id="post">
        <Typography variant="h3" color="initial" class="date">
          {moment(post.createdAt).format("MMMM Do YYYY HH:mm")}
        </Typography>
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Teema:{postTopic}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            Maakond: {postTitle}
          </Typography>
        </div>
        <Typography variant="h3" color="initial" class="user">

          Postitaja: {post.user.name || user.name}
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
PostDetails.propTypes = {
  postTopic: PropTypes.string,
  postTitle: PropTypes.string,
};
export default PostDetails;
