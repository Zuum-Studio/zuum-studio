
import { Box, Center, createStyles, Image, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Categories } from "../common/categories/Categories";
import { Course } from "./Course";
import { Exterior } from "./Exterior";
import { Interior } from "./Interior";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Visualisations() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');

    const contentMap = new Map<string, JSX.Element>([
        ["interior", <Interior />],
        ["exterior", <Exterior />],
        ["course", <Course />],
    ])

    return (
        <Box>
            <Box>
            {Categories({
                items: [
                    {
                        imageSrc: "https://media.baamboozle.com/uploads/images/249986/1611079078_215186",
                        link: "interior",
                        description: "Wnętrza",
                    },
                    {
                        imageSrc: "https://media.istockphoto.com/photos/hurricane-damage-picture-id182171478?k=20&m=182171478&s=612x612&w=0&h=eEG6jORRmR5DyF36bj4rjoDcLQA5_gClnJRGEcRO8mo=",
                        link: "exterior",
                        description: "Exteriory"
                    },
                    {
                        imageSrc: "https://www.mooc.org/hubfs/are-free-online-courses-worth-it.jpg",
                        link: "course",
                        description: "Kurs"
                    },
                ],
                carousel: false,
                onSelected: (link: string) => {
                    setActive(link)
                }
            })}
            </Box>
            <Box>
                {contentMap.get(active)}
            </Box>
        </Box>
    )

}