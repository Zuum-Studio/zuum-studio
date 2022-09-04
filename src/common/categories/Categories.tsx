import { Carousel } from "@mantine/carousel";
import { Box, SimpleGrid, Image, Center, Stack, createStyles, ActionIcon } from "@mantine/core";
import { IconArrowRight, IconCaretLeft, IconCaretRight } from "@tabler/icons";
import { useState } from "react";
import { CategoryItem } from "./CategroyItem";


type CategoryItemDefinition = {
    imageSrc: string;
    description: string;
    link: string;
}

interface CategoriesProps {
    items: CategoryItemDefinition[];
    carousel: boolean;
    onSelected: (link: string) => void;
}

export function Categories(props: CategoriesProps) {
    const [active, setActive] = useState('');

    function createItem(item: CategoryItemDefinition) {
        return (
            <CategoryItem
            imageSrc={item.imageSrc}
            link={item.link}
            description={item.description}
            isActive={item.link === active} 
            onSelected={() => {
                setActive(item.link)
                props.onSelected(item.link)
            }
        }
        />
        )
    }

    if (props.carousel) {
        return (
            <Carousel
                withIndicators
                slideSize="33.333%"
                slideGap="md"
                loop
                controlSize={25}
                previousControlIcon={<IconCaretLeft size={25} fill="black" />}
                nextControlIcon={<IconCaretRight size={25} fill="black" />}
                align="center"
                slidesToScroll={1}
            >
                {props.items.map((item, index) => (<Carousel.Slide> {createItem(item)} </Carousel.Slide>))}
                {/* {props.items.map((item, index) => (<Carousel.Slide> {test()} </Carousel.Slide>))} */}
            </Carousel>
        )
    } else {
        return (
            <Box>
                <SimpleGrid cols={props.items.length}>
                    {props.items.map((item, index) => createItem(item))}
                </SimpleGrid>
            </Box>
        )
    }
}

