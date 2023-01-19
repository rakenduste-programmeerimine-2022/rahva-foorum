import { useAuthContext } from "../hooks/useAuthContext";
import { Typography } from "@mui/material";

const CommentDetails = ({ comment }) => {
  const { user } = useAuthContext();

  return (
    <div>
          <Typography variant="h3" color="initial" class="date">
            Kuupäev-kellaaeg
          </Typography>
          <Typography variant="h2" color="initial" class="heading">
            Kasutaja: {comment.user.name || user.name}
          </Typography>
          <Typography variant="h2" color="initial" class="location">
            Kommentaar: {comment.comment}
          </Typography>
    </div>
  );
};

export default CommentDetails;
