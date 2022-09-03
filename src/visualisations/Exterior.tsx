import { Grid, Skeleton, Container, Box } from '@mantine/core';

const child = <Skeleton height={400} animate={false} />;

export function Exterior() {
    return (
        <Box>
            Exteriory
            <Grid>
                <Grid.Col xs={4}>{child}</Grid.Col>
                <Grid.Col xs={8}>{child}</Grid.Col>
                <Grid.Col xs={8}>{child}</Grid.Col>
                <Grid.Col xs={4}>{child}</Grid.Col>
                <Grid.Col xs={3}>{child}</Grid.Col>
                <Grid.Col xs={3}>{child}</Grid.Col>
                <Grid.Col xs={6}>{child}</Grid.Col>
            </Grid>
        </Box>
    );
}