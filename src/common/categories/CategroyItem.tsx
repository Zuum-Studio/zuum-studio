import { Title, Box, Image, Center, Stack, createStyles } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    itemImage: {
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',

        '&:hover': {
            filter: 'none',
            '-webkit-filter': 'grayscale(0)',
            cursor: 'pointer',

            color: theme.black,
        },

        color: theme.colors.gray[6],
        textTransform: 'uppercase',
    },

    activeItemImage: {
        filter: 'none',
        '-webkit-filter': 'grayscale(0)',

        color: theme.black,
    },

    mainLink: {

    },
}));

type CategoryItemProps = {
    imageSrc: string;
    description: string;
    link: string;
    isActive: boolean;
    onSelected: () => void;
}

export function CategoryItem(props: CategoryItemProps) {
    const { classes, cx } = useStyles();

    return (
            <Box className={cx(classes.itemImage, {[classes.activeItemImage]: props.isActive})}>
                <Stack>
                        <Image 
                            height={250}
                            src={props.imageSrc}
                            onClick={() => props.onSelected()}
                        />
                        <Center><Title order={5}>{props.description}</Title></Center>
                </Stack>
            </Box>
    )
}
