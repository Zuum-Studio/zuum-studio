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
                        src="zuum-studio/logo192.png"
                        alt="me"
                    />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Text align="justify">
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                Mam na imię Zuzia. Moje ulubione liczby to 13 i 18. W wolnych chwilach lubię denerwować biednego Makusia.
                </Text>
            </Grid.Col>
        </Grid>
    )
}