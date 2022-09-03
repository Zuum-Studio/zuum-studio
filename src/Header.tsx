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
        fontSize: 20,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
            cursor: 'pointer',
        },
    },

    secondaryLink: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        fontSize: theme.fontSizes.xs,
        textTransform: 'uppercase',
        transition: 'color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },

    mainLinkActive: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottomColor: theme.black
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
        <Center><Title order={1}
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