import { Box, Collapse, Container, createStyles, Divider, MantineProvider, Text } from '@mantine/core';
import { useState } from 'react';
import { ZuumHeader } from './Header'

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },

  hidden: {
    display: 'none' 
  },

  appRows: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  logo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  content: {
    flexGrow: 1,
  },

  logoDivider: {
    flexGrow: 1,
  },

}));

// Theme setup: https://mantine.dev/theming/theme-object/#usage
export default function App() {

  const [content, setContent] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const { classes, cx } = useStyles();

  function onMenuItemSelected(link: string) {
    setSelectedMenuItem(link)
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
        <Box className={cx(classes.logo, { [classes.hidden]: !(selectedMenuItem === '') })}>
          <Divider />
          <Container className={classes.logoDivider}><Divider /></Container>
          <Container>PORTFOLIO</Container>
          <Container className={classes.logoDivider}><Divider /></Container>
        </Box>
        <Box>
          {ZuumHeader({
            mainLinks: [
              { label: "O mnie", link: "aboutme" },
              { label: "Wizualizacje", link: "visualisations" },
              { label: "Projekty", link: "projects" },
            ],
            userLinks: [
              { label: "POLSKI", link: "sub1" },
              { label: "ENGLISH", link: "sub2" },
            ],
            onSelected: (link) => onMenuItemSelected(link)
          })}
        </Box>
        <Box className={cx(classes.content, { [classes.hidden]: (selectedMenuItem === '') })}>
          {content}
        </Box>
      </Box>
    </MantineProvider>
  );
}
