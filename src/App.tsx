import { Affix, Avatar, Blockquote, Box, Button, Center, Collapse, Container, createStyles, Divider, MantineProvider, Overlay, Stack, Text, Title, Tooltip, Transition } from '@mantine/core';
import { useState } from 'react';
import { HEADER_HEIGHT, ZuumHeader } from './Header'
import { AboutMe } from './aboutme/AboutMe'
import { Projects } from './projects/Projects';
import { Visualisations } from './visualisations/Visualisations';
import { Socials } from './Socials';

const useStyles = createStyles((theme) => ({
  main: {
    flexDirection: 'column',
    zIndex: 1,
  },

  hidden: {
    display: 'none' 
  },

  divider: {
    flexGrow: 1,
  },

  logo: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  filler: {
    // position: 'fixed',
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    paddingTop: `calc((100vh - ${HEADER_HEIGHT}px)/2)`,
  },

  content: {
    paddingTop: 50,
    paddingLeft: 200,
    paddingRight: 200,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    overflow: 'auto',
  }
}));

// Theme setup: https://mantine.dev/theming/theme-object/#usage
export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [displayedContent, setDisplayedContent] = useState('');
  const contentMap = new Map<string, JSX.Element>([
    ["aboutMe", <AboutMe />],
    ["projects", <Projects />],
    ["visualisations", <Visualisations />],
  ])
  const { classes, cx } = useStyles();

  function onMenuItemSelected(link: string) {
    setSelectedMenuItem(link)
    if (link !== '') {
      setDisplayedContent(link)
    }
  }

  function noneMenuItemSelected(): boolean {
    return selectedMenuItem === ''
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
    // theme={{
    //   colorScheme: 'light',
    //   colors: {
    //     // Add your color
    //     deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
    //     // or replace default theme color
    //     blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
    //   },

    //   shadows: {
    //     md: '1px 1px 3px rgba(0, 0, 0, .25)',
    //     xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    //   },

    //   headings: {
    //     fontFamily: 'Roboto, sans-serif',
    //     sizes: {
    //       h1: { fontSize: 30 },
    //     },
    //   },
    // }}
    >
      <Affix position={{ top: 10, right: 10 }}><Socials /></Affix>
      <Box className={classes.main}>
        <Collapse in={noneMenuItemSelected()} transitionDuration={2000}>
          <Box className={classes.filler}>
            <Stack>
              <Divider color="black" size="md" label={<Title order={1}>PORTFOLIO</Title>} labelPosition="center" />
              <Center>
                <Stack spacing="xs">
                  <Text size="xl">Zuzanna Majcherczyk</Text>
                  <Text color="gray.6">zuzanna.13.18@gmail.com</Text>
                  <Avatar sx={{position: "relative", left: -80, bottom: 70}} size="lg" radius="xl" src="https://www.mooc.org/hubfs/are-free-online-courses-worth-it.jpg" alt="it's me" />
                  <Blockquote sx={{position: "absolute", left: 80, top: 200}} cite="– Terminator T-800">
                    Hasta la vista, baby!
                  </Blockquote>
                </Stack>
              </Center>
            </Stack>
          </Box>
        </Collapse>
        <Box>
          {ZuumHeader({
            mainLinks: [
              { label: "O mnie", link: "aboutMe" },
              { label: "Wizualizacje", link: "visualisations" },
              { label: "Projekty", link: "projects" },
            ],
            onSelected: (link) => onMenuItemSelected(link)
          })}
        </Box>
        <Box className={classes.content}>
          {contentMap.get(displayedContent)!}
        </Box>
      </Box>
    </MantineProvider>
  );
}


