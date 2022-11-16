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
                <Grid.Col xs={10}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/perspektywa.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/1_1000.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/1_500.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={12}> 
                    <Text align="justify">
                        Dodatkowo indywidualnie do opracowania był projekt wybranego kwartału zabudowy który znajdował się w projekcie.
                    </Text>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/kadr_02.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="50%"
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
                                src="images/projects/dolina_pradnika/rzutParteru.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/kondygnacjaPowtarzalna.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/najwyzszaKondygnacja.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/poziom-2.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/poziom-1.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col xs={12}> 
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/przekrój_a-a.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/przekrój_b-b.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/elewacja1.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/elewacja2.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/elewacja3.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/elewacja1.jpg"
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
                                src="images/projects/dolina_pradnika/01.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/02.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/03.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/04.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/09.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/10.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/11.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/dolina_pradnika/12.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    )
}