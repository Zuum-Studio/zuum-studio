import { Box, Center, Collapse, Container, createStyles, Divider, MantineProvider, Text, Transition } from '@mantine/core';
import { useState } from 'react';
import { HEADER_HEIGHT, ZuumHeader } from './Header'
import { AboutMe } from './AboutMe'
import { Projects } from './Projects';
import { Visualisations } from './Visualisations';

const useStyles = createStyles((theme) => ({
  main: {
    flexDirection: 'column',
  },

  hidden: {
    display: 'none' 
  },

  grow: {
    flexGrow: 1,
  },

  center: {
    alignItems: 'center',
  },

  logo: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  filler: {
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
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
      <Box className={classes.main}>
          <Collapse in={noneMenuItemSelected()} transitionDuration={2000}>
            <Box className={classes.filler}>
              <Box className={classes.logo}>
                <Box className={classes.grow}><Divider /></Box>
                <Box>PORTFOLIO</Box>
                <Box className={classes.grow}><Divider /></Box>
              </Box>
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


