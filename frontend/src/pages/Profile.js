import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Profile() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div>
      <Typography variant="h1" color="initial" class="heading">
        Profiil
      </Typography>
      <Typography variant="h1" color="initial" class="heading">
        Username:{user.name}
      </Typography>
      <Typography variant="h1" color="initial" class="heading">
        Email:{user.email}
      </Typography>
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
          </Stack>
        </Container>
        <Typography variant="h1" color="initial" class="heading">
          Minu andmed
        </Typography>
        <Button
          sx={{
            backgroundColor: "black",
            "&:hover": { backgroundColor: "green" },
          }}
          variant="contained"
        >
          Muuda andmeid
        </Button>
      </Container>
    </div>
  );
}
