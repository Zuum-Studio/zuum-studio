import { Grid, Skeleton, Container, Box } from '@mantine/core';

const child = <Skeleton height={350} animate={false} />;

export function Course() {
    return (
        <Box>
            <Grid>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={8}>
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                    Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami.
                </Grid.Col>
            </Grid>
        </Box>
    );
}