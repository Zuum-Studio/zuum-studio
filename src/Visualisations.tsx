import { Carousel } from "@mantine/carousel";
import { Box, Center, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Visualisations() {
    const { classes, cx } = useStyles();

    return (
        <Center>
            <Carousel
                className={classes.grouping}
                withIndicators
                height={200}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="center"
                slidesToScroll={3}
                >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                {/* ...other slides */}
            </Carousel>
        </Center>
    )

}