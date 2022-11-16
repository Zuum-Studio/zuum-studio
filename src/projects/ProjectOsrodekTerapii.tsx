import { Box, Image, createStyles, Grid, Skeleton, Text, Center } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconCaretLeft, IconCaretRight } from "@tabler/icons";
import { MainImageTitle } from "../common/MainImageTitle";

const child = <Skeleton height={400} animate={false} />;
const useStyles = createStyles((theme) => ({

}));

export function ProjectOsrodekTerapii() {
    const { classes, cx } = useStyles();

    return (
        <Box> 
            <Grid>
                <Grid.Col span={12}><Box sx={{height: "100px"}}></Box></Grid.Col>
                <Grid.Col xs={12}>
                    <MainImageTitle title="OŚRODEK TERAPII DLA OSÓB DOROSŁYCH Z AUTYZMEM W KRAKOWIE" description1="STOPIEŃ II, ROK II, SEMESTR III, ROK AKADEMICKI 2020/2021" 
                    subtitle="PRACA DYPLOMOWA MAGISTERSKA" image="images/projects/osrodek_terapii/mainViz.jpg" 
                    description2="KATEDRA URBANISTYKI I ARCHITEKTURY STRUKTUR MIEJSKICH A-9" description3="PROMOTOR: DR INŻ. ARCH. ERNESTYNA SZPAKOWSKA - LORANC"></MainImageTitle>
                </Grid.Col>   
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={12}> 
                    <Text align="justify">
                    Projekt zakładał stworzenie przestrzeni przeznaczonej dla osób dorosłych z autyzmem. 
                    Jest zlokalizowany w Polsce, w Krakowie,w dzielnicy VIII Dębniki, przy ulicy Skotnickiej. 
                    Projektowany obiekt jest podzielony na 3 funkcje główne: terapeutyczną, warsztatową i mieszkaniową.
                    Każda z nich jest połączona przejściami (korytarzami) które umożliwiają spokojne dostosowanie się pacjenta na zmianę otoczenia.
                    Dodatkowo w każdej części budynku znajduję się odpowiednia ilość pomieszczeń do wyciszenia. 
                    W projekcie nie zabrakło również terenów zielonych : patio ogólnodostępne, patio w części mieszkalnej, wybieg dla zwierząt, ogród sensoryczny i niewielki park. 
                    Działka na której znajduje się ośrodek jest ogrodzona. 

                    </Text>
                </Grid.Col> 
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={5}>
                    <Carousel
                        withIndicators
                        slideSize="80%"
                        slideGap={20}
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
                                src="images/projects/osrodek_terapii/analizaFunkcjonalna.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/analizaHalasu.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/analizaZieleni.jpg"
                                alt="me"/>
                        </Carousel.Slide> 
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={7}>
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
                                src="images/projects/osrodek_terapii/aksonometria.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={12}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zagospodarowanie1000.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={8}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zagospodarowanie500.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/legenda1.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie1.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie2.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/zdjecie3.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/schematFunkcji.jpg"
                                alt="me"/>
                    </Grid.Col> 
                <Grid.Col xs={6}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/schematZieleni.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                            RZUT POZIOMU -1
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                            RZUT PPARTERU
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}> 
                    <Center>
                        <Text align="justify">
                            RZUT PIĘTRA
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutPiwnicy.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutParteru.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/rzutPietra.jpg"
                                alt="me"/>
                    </Grid.Col>  
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="100%"
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
                                radius="md"
                                src="images/projects/osrodek_terapii/plan01.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan02.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan03.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan04.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan05.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan06.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan07.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                radius="md"
                                src="images/projects/osrodek_terapii/plan08.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col> 
                <Grid.Col xs={4}> 
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii//greenhouseViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/frontgardenViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={4}>
                    <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/gardenViz.jpg"
                                alt="me"/>
                    </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/poolViz.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={6}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/sensoryViz.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col xs={12}>
                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/elewacja1.jpg"
                                alt="me"/>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
                <Grid.Col xs={12}> 
                    <Center>
                        <Text align="justify">
                            PROJEKT PLANSZ PREZENTUJĄCYCH CAŁY ZAKRES PROJEKTU
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col xs={12}>
                    <Carousel
                        withIndicators
                        slideSize="33.333%"
                        slideGap="md"
                        loop
                        // controlSize={25}
                        previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                        nextControlIcon={<IconCaretRight size={25} fill="black" />}
                        align="start"
                        slidesToScroll={1}
                    >
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza1.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza2.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza3.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza4.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza5.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza6.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza7.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                        <Carousel.Slide> 
                                <Image
                                width="100%"
                                radius="md"
                                src="images/projects/osrodek_terapii/plansza8.jpg"
                                alt="me"/>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={12}><Box sx={{height: "50px"}}></Box></Grid.Col> 
            </Grid>
        </Box>
    )
}