import { Grid, Skeleton, Container, Box } from '@mantine/core';

const child = <Skeleton height={300} animate={false} />;

export function Interior() {
    return (
        <Box>
            Wnętrza
            <Grid>
                <Grid.Col span={6}>{child}</Grid.Col>
                <Grid.Col span={6}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={3}>{child}</Grid.Col>
                <Grid.Col span={1}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={3}>{child}</Grid.Col>
            </Grid>
        </Box>
    );
}