import Head from 'next/head';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <>
      <Head>
        <title>E-learning</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            components: {
              Button: {
                classNames: { root: 'button-root' },
              },
            },
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}