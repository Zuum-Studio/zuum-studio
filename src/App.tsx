import { Affix, Avatar, Blockquote, Box, Button, Center, Collapse, Container, createStyles, Divider, MantineProvider, Overlay, Stack, Text, Title, Tooltip, Transition } from '@mantine/core';
import { useRef, useState } from 'react';
import { HEADER_HEIGHT, ZuumHeader } from './Header'
import { AboutMe } from './aboutme/AboutMe'
import { Projects } from './projects/Projects';
import { Visualisations } from './visualisations/Visualisations';
import { Socials } from './Socials';
import { SCROLLABLE_CONTENT_ID, ScrollUp } from './common/ScrollUp';
import { Footer, FOOTER_HEIGHT } from './Footer';

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
  },

  footer: {

  },

  content: {
    overflowY: 'scroll',

    paddingTop: '13%',
    // paddingTop: `calc(((100vh - ${HEADER_HEIGHT}px) / 2) - ${HEADER_HEIGHT}px)`,
    paddingLeft: 200,
    paddingRight: 200,
    height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
    marginRight: 13,
    marginLeft: 13,
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
  const contentRef = useRef(null);
  
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
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
    theme={{
      colorScheme: 'light',
      radius: 0,
    }}
    >
      <Affix position={{ top: 10, right: 10 }}><Socials /></Affix>
      <Box className={classes.main}>
        <Collapse in={noneMenuItemSelected()} transitionDuration={2000}>
          <Box className={classes.filler}>
            <Center style={{height: '100%'}}>
            <Stack style={{width: '100%'}}>
              <Divider color="black" size="md" label={<Title order={1} size={115}>PORTFOLIO</Title>} labelPosition="center" />
              <Center>
                <Stack spacing="xs">
                  <Text align="center" size={25}>ZUZANNA MAJCHERCZYK</Text>
                  <Text align="center" color="gray.6">majcherczyk.zuzanna@gmail.com</Text>
                </Stack>
              </Center>
            </Stack>
            </Center>
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
        <Box className={classes.content} ref={contentRef} id={SCROLLABLE_CONTENT_ID}>
          {contentMap.get(displayedContent)!}
          <ScrollUp/>
        </Box>
        <Footer></Footer>
      </Box>
    </MantineProvider>
  );
}


