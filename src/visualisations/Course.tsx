import { Grid, Skeleton, Container, Box, Image, Center, Text } from '@mantine/core';

const child = <Skeleton height={350} animate={false} />;

export function Course() {
    return (
        <Box>
            <Grid>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={4}>{child}</Grid.Col>
                <Grid.Col span={6}>
                    <Image
                        width="100%"
                        radius="md"
                        src="zuum-studio/images/course/kurs_certyfikat.jpg"
                        alt="me"
                    /></Grid.Col>
                <Grid.Col span={6}>
                    <Center sx={{height: "100%", marginLeft: "100px", marginRight: "100px"}}>
                        <Text align="justify">
                            Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                            Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. Na tym kursie nauczyłam się robić bardzo fajne obrazki z domkami. 
                        </Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Box>
    );
}