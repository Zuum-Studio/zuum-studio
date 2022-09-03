import { Carousel } from "@mantine/carousel";
import { Box, SimpleGrid, Image, Center, Stack, createStyles } from "@mantine/core";
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

    function test() {
        return                         <Image 
        height={250}
        src="https://images.unsplash.com/photo-1622957405193-4203463571b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcm58ZW58MHx8MHx8&w=1000&q=80"

    />
    }

    if (props.carousel) {
        return (
            <Carousel
                withIndicators

                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
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

