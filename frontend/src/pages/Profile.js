import { Container, Stack, Typography, TextField, Button } from '@mui/material';
export default function Profile() {
  return(
    <div>
        <Typography variant="h1" color="initial" class="heading">Minu profiil</Typography>
        <Container sx={{ border: 1}}>
          <Container sx={{ border: 1 }} id="posts">
              <Stack spacing={2} m={2}>
                <Container sx={{ border: 1, display: 'flex', justifyContent: 'space-between'}}  id="post">
                    <Typography variant="h1" color="initial" class="heading">Pealkiri</Typography>
                    <Typography variant="h3" color="initial" class="date">Kuupäev-kellaaeg</Typography>
                    <Typography variant="h1" color="initial" class="location">Võrumaa</Typography>
                </Container>
                <Container sx={{ border: 1, display: 'flex', justifyContent: 'space-between'}}  id="post">
                    <Typography variant="h1" color="initial" class="heading">Pealkiri</Typography>
                    <Typography variant="h3" color="initial" class="date">Kuupäev-kellaaeg</Typography>
                    <Typography variant="h1" color="initial" class="location">Võrumaa</Typography>
                </Container>
              </Stack>
          </Container>
          <Typography variant="h1" color="initial" class="heading">Minu andmed</Typography>
          <Button sx={{ backgroundColor: 'black', '&:hover': { backgroundColor:'green' }}} variant="contained">Muuda andmeid</Button>
        </Container>
    </div>
)
}