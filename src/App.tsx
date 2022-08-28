import { MantineProvider, Text } from '@mantine/core';
import { ZuumHeader } from './Header'

// Theme setup: https://mantine.dev/theming/theme-object/#usage
export default function App() {
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
      {ZuumHeader({
        mainLinks: [
          { label: "O mnie", link: "aboutme" },
          { label: "Wizualizacje", link: "visualisations" },
          { label: "Projekty", link: "projects" },
        ],
        userLinks: [
          { label: "POLSKI", link: "sub1" },
          { label: "ENGLISH", link: "sub2" },
        ]
      })}
    </MantineProvider>
  );
}
