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

    const items = props.items.map((item, index) => (
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
    ));

    if (props.carousel) {
        return (
            <Box>
                <SimpleGrid cols={props.items.length}>
                    {items}
                </SimpleGrid>
            </Box>
        )
    } else {
        return (
            <Box>
                <SimpleGrid cols={props.items.length}>
                    {items}
                </SimpleGrid>
            </Box>
        )
    }
}

