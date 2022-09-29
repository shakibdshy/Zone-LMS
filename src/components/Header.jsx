import React from 'react'
import { Box, Burger, Container, Group, Header, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import Link from 'next/link'
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import DrawerMenu from './DrawerMenu';

const HeaderLayout = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            <Box pb={120}>
                <Container size="lg" px='lg'>
                    <Header height={60}>
                        <Group position="apart" sx={{ height: '100%' }}>
                            <Image src={dark ? lightLogo : darkLogo} alt='Logo' width={74} height={20} />
                            <Burger opened={drawerOpened} onClick={toggleDrawer} />
                        </Group>
                    </Header>
                    <DrawerMenu
                        drawerOpened={drawerOpened}
                        closeDrawer={closeDrawer}
                        linksOpened={linksOpened}
                        toggleLinks={toggleLinks}
                    />
                </Container>
            </Box>

        </>
    )
}

export default HeaderLayout