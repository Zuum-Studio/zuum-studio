
import { Box, Center, createStyles, Image, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { Categories } from "../common/categories/Categories";
import { ProjectDolinaPradnika } from "./ProjectDolinaPradnika";
import { ProjectOsrodekTerapii } from "./ProjectOsrodekTerapii";
import { ProjectPawilon } from "./ProjectPawilon";

const useStyles = createStyles((theme) => ({
    grouping: {
        // width: '50%',
    }
}));

export function Projects() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');

    const contentMap = new Map<string, JSX.Element>([
        ["project-dolina-pradnika", <ProjectDolinaPradnika/>],
        ["project-osrodek-terapii", <ProjectOsrodekTerapii/>],
        ["project-pawilon", <ProjectPawilon/>],
        ["course", <></>],
    ])

    return (
        <Box>
            <Box>
            {Categories({
                items: [
                    {
                        imageSrc: "images/projects/dolina_pradnika/finalnyKadr.jpg",
                        link: "project-dolina-pradnika",
                        description: "Wielorodzinny zespół mieszkaniowy w dolinie prądnika",
                    },
                    {
                        imageSrc: "images/projects/osrodek_terapii/frontViz.jpg",
                        link: "project-osrodek-terapii",
                        description: "Ośrodek Terapii dla Osób Dorosłych z Autyzmem w Krakowie"
                    },
                    {
                        imageSrc: "https://assets.gamepur.com/wp-content/uploads/2022/05/15130111/Barn-in-Minecraft.jpg",
                        link: "3",
                        description: "Stodoła w Minecraft"
                    },
                    {
                        imageSrc: "https://i.cbc.ca/1.3355986.1449605277!/fileImage/httpImage/happy-barn-alberta.jpg",
                        link: "project-pawilon",
                        description: "PAWILON ARCHEOLOGICZNY W WIŚLICY"
                    },
                ],
                carousel: true,
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