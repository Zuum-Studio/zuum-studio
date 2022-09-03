import { Box, SimpleGrid, Image, Center, Stack, createStyles } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    itemImage: {
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',
        '&:hover': {
            filter: 'none',
            '-webkit-filter': 'grayscale(0)',
        }
    },

    activeItemImage: {
        filter: 'none',
        '-webkit-filter': 'grayscale(0)',
    }
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
        <Center>
            <Stack>
                    <Image 
                        className={cx(classes.itemImage, {[classes.activeItemImage]: props.isActive})}
                        height={250}
                        src={props.imageSrc}
                        onClick={() => props.onSelected()}
                    />
                    <Center>{props.description}</Center>
            </Stack>
        </Center>
    )
}
