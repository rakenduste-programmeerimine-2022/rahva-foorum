import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useForumContext } from "../hooks/useForumContext";
import { useEffect } from "react";
import PostDetails from "../components/PostDetails";

const Profile = () => {
  const { posts, dispatch } = useForumContext();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/forum/userposts", {
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
      <Container>
        <Typography variant="h1" color="initial" class="heading">
          Profiil
        </Typography>
        <Typography variant="h2" color="initial" class="heading">
          Kasutajanimi: {user.name}
        </Typography>
        <Typography variant="h2" color="initial" class="heading">
          Email: {user.email}
        </Typography>
      </Container>
      <Container sx={{ border: 1 }}>
        <Typography variant="h1" color="initial" class="heading">
          Minu postitused
        </Typography>
        <Container sx={{ border: 1 }} id="posts">
          <Stack spacing={2} m={2}>
            <Container
              sx={{
                border: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
              id="post"
            >
              <Typography variant="h1" color="initial" class="heading">
                Pealkiri
              </Typography>
              <Typography variant="h3" color="initial" class="date">
                Kuupäev-kellaaeg
              </Typography>
              <Typography variant="h1" color="initial" class="location">
                Võrumaa
              </Typography>
            </Container>
            <Container
              sx={{
                border: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
              id="post"
            >
              <div className="workouts">
                {posts &&
                  posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                  ))}
              </div>
            </Container>
          </Stack>
        </Container>
      </Container>
    </>
  );
};
export default Profile;
