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
    // background: 'pink',
    // // display: 'flex',
    // flexGrow: 1,
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },

  logo: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  filler: {
    height: `calc(100vh - 84px)`,
  }
}));

// Theme setup: https://mantine.dev/theming/theme-object/#usage
export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [shouldHideContent, setShouldHideContent] = useState(true);
  const { classes, cx } = useStyles();

  function onMenuItemSelected(link: string) {
    setSelectedMenuItem(link)
  }

  function noneMenuItemSelected(): boolean {
    return selectedMenuItem === ''
  }

  function onMenuItemSelectedTransitionEnd() {
    setShouldHideContent(!shouldHideContent)
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
          <Collapse className={classes.logoCollapse} in={noneMenuItemSelected()} transitionDuration={2000} onTransitionEnd={() => onMenuItemSelectedTransitionEnd()}>
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
        {/* <Collapse className={cx(classes.grow)} in={!(selectedMenuItem === '')}>
          {selectedMenuItem}
        </Collapse> */}
        <Box className={cx(classes.grow, { [classes.hidden]: (shouldHideContent)})}>
          {selectedMenuItem}
        </Box>
      </Box>
    </MantineProvider>
  );
}


