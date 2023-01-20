import { useAuthContext } from "../hooks/useAuthContext";
import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import moment from "moment";


const CommentDetails = ({ comment }) => {
  const { user } = useAuthContext();
  let Comment = comment.comment;

  return (
    <div>

      <Typography variant="h3" color="initial" class="date">
        Kuupäev ja kellaeg:{" "}
        {moment(comment.createdAt).format("MMMM Do YYYY HH:mm")}
      </Typography>
      <Typography variant="h2" color="initial" class="heading">
        Kasutaja: {comment.user.name || user.name}
      </Typography>
      <Typography variant="h2" color="initial" class="location">
        Kommentaar: {Comment}
      </Typography>

    </div>
  );
};
CommentDetails.propTypes = {
  Comment: PropTypes.string,
};
export default CommentDetails;
