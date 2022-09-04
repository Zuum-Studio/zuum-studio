import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Box, Divider, Grid, SimpleGrid, Center, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const HEADER_HEIGHT = 72;

const useStyles = createStyles((theme) => ({

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    links: {
        paddingTop: 30,
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    mainLink: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: theme.colors.gray[6],
        // borderBottom: '3px solid transparent',

        '&:hover': {
            // fontWeight: 'bold',
            color: theme.black,
            cursor: 'pointer',
            // borderBottomColor: theme.black,
        },
    },

    mainLinkActive: {
        fontWeight: 900,
        color: theme.black,
        // borderBottomColor: theme.black
    },
}));

interface LinkProps {
    label: string;
    link: string;
}

interface ZuumHeaderProps {
    mainLinks: LinkProps[];
    onSelected: (link: string) => void
}

export function ZuumHeader({ mainLinks, onSelected }: ZuumHeaderProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const noneActive = -1
    const [active, setActive] = useState(noneActive);

    const mainItems = mainLinks.map((item, index) => (
        <Center><Title order={3}
            className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
            onClick={(event) => {
                event.preventDefault();
                if (index === active) {
                    setActive(noneActive)
                    onSelected('')
                } else {
                    setActive(index);
                    onSelected(item.link)
                }
            }}
        >
            {item.label}
        </Title></Center>
    ));

    return (
        <Header height={HEADER_HEIGHT} withBorder={false}>
            
            <Container className={classes.links}>
                <SimpleGrid cols={3}>
                    {mainItems}
                </SimpleGrid>
            </Container>

            <Burger opened={opened} onClick={toggle} className={classes.burger} size="md" />
        </Header>
    );
}