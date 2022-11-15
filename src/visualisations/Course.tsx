import { Grid, Skeleton, Container, Box, Image, Center, Text } from '@mantine/core';

const child = <Skeleton height={350} animate={false} />;

export function Course() {
    return (
        <Box>
            <Grid>
                <Grid.Col span={12}>
                <Center sx={{height: "100%", marginLeft: "160px", marginRight: "70px"}}>
                    <Image
                        width="90%"
                        radius="md"
                        src="zuum-studio/images/visualisations/course/kurs_certyfikat.jpg"
                        alt="me"/>
                </Center>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col span={3}>
                    <Image
                        width="100%"
                        radius="md"
                        src="zuum-studio/images/visualisations/course/kurs_interior.jpg"
                        alt="me"
                    /></Grid.Col>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span={4}> 
                    <Center sx={{height: "100%"}}>
                        <Image
                            width="100%"
                            radius="md"
                            src="zuum-studio/images/visualisations/course/kurs_exterior.jpg"
                            alt="me"
                    /></Center>
                </Grid.Col>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span={3}>
                    <Image
                        width="100%"
                        radius="md"
                        src="zuum-studio/images/visualisations/course/kurs_closeup.jpg"
                        alt="me"
                /></Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    );
}