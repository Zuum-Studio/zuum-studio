import { Grid, Skeleton, Container, Box, Image } from '@mantine/core';

const child = <Skeleton height={400} animate={false} />;

export function Exterior() {
    return (
        <Box>
            <Grid>
                <Grid.Col xs={4}>
                <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/exteriors/01_kurs.jpg"
                            alt="me"/>
                            </Grid.Col>
                <Grid.Col xs={8}>
                <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/exteriors/02_urb.jpg"
                            alt="me"/>
                            </Grid.Col>
            </Grid>
        </Box>
    );
}