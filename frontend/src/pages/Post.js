
import { Container, Stack, Typography } from '@mui/material';
export default function Post() {

    return(
        <div>
            <Container sx={{ border: 1 }}  id="post">
                <Typography variant="h3" color="initial" class="date">Kuupäev-kellaaeg</Typography>
                <div class="heading-container">
                    <Typography variant="h1" color="initial" class="heading">Pealkiri</Typography>
                    <Typography variant="h1" color="initial" class="location">Võrumaa</Typography>
                </div>
                <Typography variant="h3" color="initial" class="user">Kasutaja1</Typography>
                <Typography variant="body1" color="initial" class="content">
                    Cras laoreet vitae arcu at facilisis. Nulla efficitur odio nec velit rhoncus, ac imperdiet nisi convallis. Aliquam rutrum non orci vel blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus efficitur tempor urna, et consectetur urna convallis vel. Praesent rhoncus arcu a tincidunt convallis. Ut commodo magna eget fringilla sagittis. Quisque auctor ante mattis felis imperdiet dictum. Sed tristique egestas nibh finibus tincidunt. Nullam tortor diam, viverra sed elementum at, gravida suscipit nisl. Nam dictum ante ac augue semper, sit amet cursus metus tempor.
                </Typography>
            </Container>

            <Container sx={{ border: 1 }} id="post">
                <Stack spacing={2}>
                    <Container sx={{ border: 1 }}>
                        <Typography variant="h3" color="initial" class="date">Kuupäev-kellaaeg</Typography>
                        <Typography variant="h3" color="initial" class="user">Kasutaja2</Typography>
                        <Typography variant="body1" color="initial" class="content">
                            Cras laoreet vitae arcu at facilisis. Nulla efficitur odio nec velit rhoncus, ac imperdiet nisi convallis. Aliquam rutrum non orci vel blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus efficitur tempor urna, et consectetur urna convallis vel. Praesent rhoncus arcu a tincidunt convallis. Ut commodo magna eget fringilla sagittis. Quisque auctor ante mattis felis imperdiet dictum. Sed tristique egestas nibh finibus tincidunt. Nullam tortor diam, viverra sed elementum at, gravida suscipit nisl. Nam dictum ante ac augue semper, sit amet cursus metus tempor.
                        </Typography>
                    </Container>

                    <Container sx={{ border: 1 }}>
                        <Typography variant="h3" color="initial" class="date">Kuupäev-kellaaeg</Typography>
                        <Typography variant="h3" color="initial" class="user">Kasutaja3</Typography>
                        <Typography variant="body1" color="initial" class="content">
                            Cras laoreet vitae arcu at facilisis. Nulla efficitur odio nec velit rhoncus, ac imperdiet nisi convallis. Aliquam rutrum non orci vel blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus efficitur tempor urna, et consectetur urna convallis vel. Praesent rhoncus arcu a tincidunt convallis. Ut commodo magna eget fringilla sagittis. Quisque auctor ante mattis felis imperdiet dictum. Sed tristique egestas nibh finibus tincidunt. Nullam tortor diam, viverra sed elementum at, gravida suscipit nisl. Nam dictum ante ac augue semper, sit amet cursus metus tempor.
                        </Typography>
                    </Container>
                </Stack>
            </Container>

        </div>
        
    )
}