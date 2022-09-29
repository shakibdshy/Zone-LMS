import React from 'react'
import { Box, Burger, Button, Container, Group, Header, List, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import Link from 'next/link'
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import DrawerMenu from './DrawerMenu';
import {
    IconDatabase,
} from '@tabler/icons';

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
                        <Group align='center' position="apart" sx={{ height: '100%' }}>
                            <Group align='center' spacing={24}>
                                <Image src={dark ? lightLogo : darkLogo} alt='Logo' width={74} height={20} />
                                <List className='flex gap-12'>
                                    <List.Item>
                                        <Link href="/">
                                            <a className={`${dark ? 'text-dark-secondary hover:text-dark-primary' : 'text-light-secondary hover:text-secondary-primary'}`}>Home</a>
                                        </Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="/">
                                            <a className={`${dark ? 'text-dark-secondary hover:text-dark-primary' : 'text-light-secondary hover:text-secondary-primary'}`}>Components</a>
                                        </Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="/">
                                            <a className={`${dark ? 'text-dark-secondary hover:text-dark-primary' : 'text-light-secondary hover:text-secondary-primary'}`}>Pages</a>
                                        </Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="/">
                                            <a className={`${dark ? 'text-dark-secondary hover:text-dark-primary' : 'text-light-secondary hover:text-secondary-primary'}`}>Documentation</a>
                                        </Link>
                                    </List.Item>
                                </List>
                            </Group>

                            <Group spacing={5}>
                                <Button variant='subtle' component='a' href='/login' className='btn btn-md btn-dark-transparent'>
                                    Login
                                </Button>
                                <Button component='a' href='/register' className='btn btn-md btn-dark-primary'>
                                    Join Us
                                </Button>
                            </Group>

                            <Burger className='md:hidden' opened={drawerOpened} onClick={toggleDrawer} />
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