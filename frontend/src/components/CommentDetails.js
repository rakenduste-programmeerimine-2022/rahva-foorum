import { ListItem, ListItemText } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";

const CommentDetails = ({ comment }) => {
  const { user } = useAuthContext();

  return (
    <div>
      <Container sx={{ border: 3 }} id="post">
        <div class="heading-container">
          <Typography variant="h1" color="initial" class="heading">
            Kasutaja: {comment.user.name || user.name}
          </Typography>
          <Typography variant="h1" color="initial" class="location">
            Kommentaar: {comment.comment}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default CommentDetails;
