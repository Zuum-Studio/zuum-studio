import { Box, Center, Collapse, Container, createStyles, Divider, MantineProvider, Text, Transition } from '@mantine/core';
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

  grow: {
    flexGrow: 1,
  },

  center: {
    alignItems: 'center',
  },

  logoCollapse: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoDivider: {
    flexGrow: 1,
    height: '100%',
  },

  logo: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  fillHeight: {
    height: '100%',
  }
}));

// Theme setup: https://mantine.dev/theming/theme-object/#usage
export default function App() {
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
        <Transition mounted={(selectedMenuItem === '')} transition="slide-down" duration={400} timingFunction="ease">
          {(styles) =>
            <Box style={styles} className={classes.logo}>
              <Box className={classes.grow}><Divider /></Box>
              <Box>PORTFOLIO</Box>
              <Box className={classes.grow}><Divider /></Box>
            </Box>}
        </Transition>
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
        <Box className={cx(classes.grow, { [classes.hidden]: (selectedMenuItem === '') })}>
          {selectedMenuItem}
        </Box>
      </Box>
    </MantineProvider>
  );
}
