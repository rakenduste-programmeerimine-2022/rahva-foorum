import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const PostDetails = ({ post }) => {
  const { user } = useAuthContext();
  console.log(post);

  return (
    <div className="workout-details">
      <h4>{post.topic}</h4>
      <p>
        <strong>Maakond: </strong>
        {post.title}
      </p>
      <p>
        <strong>Teema: </strong>
        {post.text}
      </p>
      <p>
        <strong>Postitaja: </strong>
        {post.user_id}
      </p>
      <p>
        {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default PostDetails;
