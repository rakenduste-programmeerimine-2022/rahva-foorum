import { useEffect } from "react";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Stack } from "@mui/material";

import PostDetails from "../components/PostDetails";

const Profile = () => {
  const { posts, dispatch } = useForumContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/forum/allposts", {
        // headers: { Authorization: `Bearer ${user.token}` },
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
      <Stack spacing={2} m={2}>
        {posts &&
          posts.map((post) => <PostDetails key={post._id} post={post} />)}
      </Stack>
    </>
  );
};

export default Profile;
