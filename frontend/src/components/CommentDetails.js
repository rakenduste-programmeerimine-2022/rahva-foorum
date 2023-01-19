import { ListItem, ListItemText } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import { PropTypes } from "prop-types";
const CommentDetails = ({ comment }) => {
  const { user } = useAuthContext();
  let Comment = comment.comment;

  return (
    <div>
      <Container sx={{ border: 3 }} id="post">
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Kasutaja: {comment.user.name || user.name}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            Kommentaar: {Comment}
          </Typography>
        </div>
      </Container>
    </div>
  );
};
CommentDetails.propTypes = {
  Comment: PropTypes.string,
};
export default CommentDetails;
