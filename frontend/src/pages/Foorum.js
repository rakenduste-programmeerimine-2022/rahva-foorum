import { useEffect } from "react";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import PostDetails from "../components/PostDetails";


const Foorum = () => {
  const { posts, dispatch } = useForumContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = () => {
    let path = "/addpost";
    navigate(path);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/forum/allposts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [dispatch, user]);

  return (
    <>
      <Button
        onClick={handleSubmit}
        sx={{
          width: 200,
          height: 50,
          backgroundColor: "black",
          "&:hover": { backgroundColor: "green" },
        }}
        variant="contained"
      >
        Loo uus postitus
      </Button>
      <Stack spacing={2} m={2}>
        {posts &&
          posts.map((post) => <PostDetails key={post._id} post={post} />)}
      </Stack>
    </>
  );
};

export default Foorum;
