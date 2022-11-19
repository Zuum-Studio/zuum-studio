import { Text, Image, createStyles, Grid, Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

const useStyles = createStyles((theme) => ({

}));

export function AboutMe() {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();
    
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
                <Stack justify="center" sx={{height: "100%"}}>
                    <Text align="justify" size="xl" weight="bold">
                    {t("aboutMeTitle")}
                    </Text>
                    <Text align="justify" style={{ whiteSpace: "pre-line" }}>
                    {t("aboutMeDescription")}
                    </Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}