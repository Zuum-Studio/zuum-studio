import { Grid, Skeleton, Container, Box, Image } from '@mantine/core';

const child = <Skeleton height={300} animate={false} />;

export function Interior() {
    return (
        <Box>
            <Grid>
                <Grid.Col span={6}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/05_Sypialnia 2.jpg"
                            alt="me"/>
                    </Grid.Col>
                <Grid.Col span={6}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/05_Sypialnia 3.jpg"
                            alt="me"/>
                    </Grid.Col>
                <Grid.Col span={4}> 
                     <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/01a_łazienka.jpg"
                            alt="me"/>
                            </Grid.Col>
                <Grid.Col span={8}>  <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/05_Sypialnia 1.jpg"
                            alt="me"/>
                            </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/02a_łazienka.jpg"
                            alt="me"/>
                        </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/02b_łazienka.jpg"
                            alt="me"/>
                        </Grid.Col>
                <Grid.Col span={4}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/01b_łazienka.jpg"
                            alt="me"/>
                        </Grid.Col>
                <Grid.Col span={5}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/04_kurs_interior.jpg"
                            alt="me"/>
                        </Grid.Col>
                <Grid.Col span={5}>
                    <Image
                            width="100%"
                            radius="md"
                            src="images/visualisations/interiors/03_kurs_closeup.jpg"
                            alt="me"/>
                        </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    );
}