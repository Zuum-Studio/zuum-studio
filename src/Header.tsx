import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Box, Divider, Grid, SimpleGrid, Center, Title, Transition, Paper } from '@mantine/core';
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
        fontWeight: "normal",
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

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 1,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
    
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
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
    const [opened, { toggle, close }] = useDisclosure(false);
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
                close()
            }}
        >
            {item.label}
        </Title></Center>
    ));

    const burgerClick = () => {
        openModal({
          title: 'Subscribe to newsletter',
          children: <>{mainItems}</>,
        });
      };

    return (
        <Header height={HEADER_HEIGHT} withBorder={false}>
            
            <Container className={classes.links}>
                <SimpleGrid cols={3}>
                    {mainItems}
                </SimpleGrid>
            </Container>

            <Burger opened={opened} onClick={toggle} className={classes.burger} size="md">{mainItems} </Burger>

            <Transition transition="pop-top-left" duration={200} mounted={opened}>
                {(styles) => (
                    <Paper className={classes.dropdown} withBorder style={styles}>
                    {mainItems}
                    </Paper>
                )}
            </Transition>
        </Header>
    );
}

function openModal(arg0: { title: string; children: JSX.Element; }) {
    throw new Error('Function not implemented.');
}
