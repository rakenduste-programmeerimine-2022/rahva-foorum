import { ListItem, ListItemText } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";

const CommentDetails = ({ comment }) => {
  const { user } = useAuthContext();

  return (
    <div class="heading-container">
      <Typography variant="h1" color="initial" class="heading">
        Pealkiri: {comment.user.name || user.name}
      </Typography>
      <Typography variant="h1" color="initial" class="location">
        Maakond: {comment.comment}
      </Typography>
    </div>
  );
};

export default CommentDetails;
