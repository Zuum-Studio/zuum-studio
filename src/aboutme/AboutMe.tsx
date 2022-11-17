import { Text, Image, createStyles, Grid, Center } from "@mantine/core";

const useStyles = createStyles((theme) => ({

}));

export function AboutMe() {
    const { classes, cx } = useStyles();

    return (
        <Grid>
            <Grid.Col span={6}>
                <Center sx={{height: "100%"}}>
                    <Image
                        width="70%"
                        radius="md"
                        src="images/AboutMe/foto2.jpg"
                        alt="me"
                    />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                    <Text align="justify">
                    Cześć, mam na imię Zuza.
                    </Text>
                    <Text align="justify">
                    Ukończyłam Architekturę i Urbanistykę na Politechnice Krakowskiej. 
                    W trakcie studiów miałam okazję uczyć się w Stambule i Las Palmas. 
                    Od 1,5 roku zdobywałam doświadczenie jako architekt wnętrz w biurze projektowym studio hex.
                    </Text>
                    <Text align="justify">
                    Moim zadaniem było tworzenie dokumentacji projektowej, moodboardów, modeli 3d/wizualizacji, przeprowadzanie inwentaryzacji oraz pomoc w doborze materiałów.
                    </Text>
                    <Text align="justify">
                    We wnętrzach najlepiej odnajduję się w stylu vintage. 
                    Jednak tworzenie w stylu klasycznym, rustykalnym czy nowoczesnym nie jest mi obce. 
                    Natomiast w architekturze cenię minimalizm, harmonię z otoczeniem i przemyślany dobór materiałów. 
                    </Text>
                    <Text align="justify">
                    Programy w których pracuję: ArchiCAD, AutoCAD, LibreCAD, Adobe Photoshop, SketchUp + V-ray, 3ds Max + Corona.
                    </Text>
            </Grid.Col>
        </Grid>
    )
}