import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Box, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const HEADER_HEIGHT = 56;

const useStyles = createStyles((theme) => ({
    headerRows: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: HEADER_HEIGHT,
    },

    logo: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logoDivider: {
        flexGrow: 1,
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: 'uppercase',
        fontSize: 13,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
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
        borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
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
        <Anchor<'a'>
            href={item.link}
            key={item.label}
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
        </Anchor>
    ));

    return (
        <Box className={classes.headerRows}>

            <Header height={HEADER_HEIGHT}>
                <Container className={classes.inner}>
                    <Container className={classes.links}>
                        <Group spacing={0} position="right" className={classes.mainLinks}>
                            {mainItems}
                        </Group>
                    </Container>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </Container>

            </Header>
        </Box>
    );
}