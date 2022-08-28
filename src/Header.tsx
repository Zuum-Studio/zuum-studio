import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Box , Divider, Grid, Center} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const HEADER_HEIGHT = 200;

const useStyles = createStyles((theme) => ({
    header: {
        padding: 0,
        margin: 0,
    },

    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        justifyContent: 'space-between',
    },

    logoDivider: {
        flexGrow: 4,
        padding: 0,
        margin: 0,
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
    userLinks: LinkProps[];
}

export function ZuumHeader({ mainLinks, userLinks }: ZuumHeaderProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
        >
            {item.label}
        </Anchor>
    ));

    const secondaryItems = userLinks.map((item) => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            onClick={(event) => event.preventDefault()}
            className={classes.secondaryLink}
        >
            {item.label}
        </Anchor>
    ));

    return (
        <Header p="md" className={classes.header} height={HEADER_HEIGHT} mb={120}>

            <Container className={classes.logo} p="xs" m="xs" fluid>
                    <Divider my="sm" />
                    <Container className={classes.logoDivider}><Divider my="sm" /></Container>
                    <Container>PORTFOLIO</Container>
                    <Container className={classes.logoDivider}><Divider my="sm" /></Container>
                </Container>
            <Container className={classes.inner} fluid>

                <Container className={classes.links}>
                    <Group position="right">{secondaryItems}</Group>
                    <Group spacing={0} position="right" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </Container>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            </Container>

        </Header>
    );
}