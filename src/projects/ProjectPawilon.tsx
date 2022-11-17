import { Box, Image, createStyles, Grid, Skeleton, Text, Center, Title, } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconCaretLeft, IconCaretRight } from "@tabler/icons";
import { MainImageTitle } from "../common/MainImageTitle";

const child = <Skeleton height={400} animate={false} />;
const useStyles = createStyles((theme) => ({

}));

export function ProjectPawilon() {
    const { classes, cx } = useStyles();

    return (
        <Box> 
            <Grid>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col xs={12}>
                    <MainImageTitle title="PAWILON ARCHEOLOGICZNY W WIŚLICY" description1="STOPIEŃ II, ROK I, SEMESTR I, ROK AKADEMICKI 2019/2020" 
                    subtitle="" image="images/projects/pawilon/vizMain.jpg" 
                    description2="KATEDRA HISTORII ARCHITEKTURY I KONSERWACJI ZABYTKÓW" 
                    description3="PROWADZĄCY PRZEDMIOT: PROF. ZW. DR. HAB. INŻ. ARCH. ANDRZEJ KADŁUCZKA, PROWADZĄCA GRUPĘ: MGR INŻ. ARCH. MARTA STACHURSKA"
                    description4=""></MainImageTitle>
                </Grid.Col>   
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={12}> 
                    <Text align="justify">
                    Głównym założeniem projektu była rewitalizacja Pawilonu Archeologicznego w Wiślicy. 
                    Obecnie obiekt posiada tylko jedną salę wystawową która zawiera główny zabytek eksponowany w pawilonie. 
                    Brakuje funkcji towarzyszących takich jak sanitariaty, pomieszczenia socjalne oraz hol wejściowy. 
                    Dzięki powiększeniu działki uzyskałam możliwość dodania wyżej wymienionych funkcji oraz powiększyć obiekt o jeszcze jedną salę wystawową.  
                    </Text>
                </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={6}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        slideGap={50}
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaFunkcji.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaKomunikacji.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaZieleni.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Center sx={{height: "100%", width: "100%" }}>
                        <Text align="justify">
                        Analizy terenu wykonane przed przystąpieniem do projektowania.
                        </Text>
                    </Center>
                </Grid.Col> 
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/analizaStratygraficzna.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={9}>
                    <Center>
                        <Image
                                    width="100%"
                                    radius="md"
                                    src="images/projects/pawilon/wytyczneProjektowe.jpg"
                                    alt="me"/>
                        </Center>
                    </Grid.Col>
                <Grid.Col xs={3}>
                    <Image
                                width="91%"
                                radius="md"
                                src="images/projects/pawilon/zdjecia.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/zlotuPtaka.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/zagospodarowanie.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizFront.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={4}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/rzutParteru.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/rzutPiwnicy.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col xs={4}> 
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/aksoSchemat.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/opisRzuty.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojAA.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojBB.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizInterior1.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/vizInterior2.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/przekrojCC.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={12}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/elewacja.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
                <Grid.Col xs={12}> 
                    <Center>
                        <Title align="justify" size={20}>
                            PROJEKT PLANSZ PREZENTUJĄCYCH CAŁY ZAKRES PROJEKTU
                        </Title>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="33.333%"
                        slideGap="md"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="center"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_1.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_2.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_3.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_4.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_5.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/pawilon/PL_6.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    )
}