import { Container, Typography, Button } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PostDetails = ({ post }) => {
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
          Postitaja: {post.user_id}
        </Typography>

        <Typography variant="body1" color="initial" class="content">
          <Button onClick={detailsPage}>Vaata postitust</Button>
        </Typography>
      </Container>
    </div>
  );
};
PostDetails.propTypes = {
  postTopic: PropTypes.string,
  postTitle: PropTypes.string,
};
export default PostDetails;
