import React, { useState } from 'react'
import { Box, Burger, Button, Container, Divider, Group, Header, Input, List, Menu, Modal, Text, UnstyledButton, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import Link from 'next/link'
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import DrawerMenu from './DrawerMenu';
import {
    IconAt,
    IconChevronDown,
    IconDatabase,
} from '@tabler/icons';

const HeaderLayout = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [openedModal, setOpenedModal] = useState(false);
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            <Box pb={120}>
                <Container size="lg" px='lg'>
                    <Header height={60}>
                        <Group align='center' position="apart" sx={{ height: '100%' }}>
                            <Group align='center' spacing={24}>
                                <Image src={dark ? lightLogo : darkLogo} alt='Logo' width={74} height={20} />
                                <List className='hidden md:flex gap-12'>
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
                            <Group>
                                <Group spacing={10} className='hidden lg:flex'>
                                    <Button onClick={() => setOpenedModal(true)} className='btn btn-sm btn-dark-transparent border-none'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.7502 20.6894L16.0861 15.0253C17.4471 13.3913 18.1258 11.2955 17.981 9.17387C17.8362 7.05224 16.8789 5.06812 15.3085 3.63426C13.738 2.20041 11.6752 1.42721 9.54918 1.47552C7.42316 1.52384 5.39761 2.38993 3.89389 3.89365C2.39018 5.39736 1.52408 7.42292 1.47577 9.54894C1.42746 11.675 2.20065 13.7378 3.63451 15.3082C5.06836 16.8787 7.05248 17.8359 9.17412 17.9808C11.2958 18.1256 13.3915 17.4469 15.0255 16.0859L20.6896 21.7499L21.7502 20.6894ZM3.00018 9.74993C3.00018 8.41491 3.39606 7.10987 4.13776 5.99983C4.87946 4.8898 5.93366 4.02464 7.16706 3.51375C8.40047 3.00285 9.75766 2.86918 11.067 3.12963C12.3764 3.39008 13.5791 4.03296 14.5231 4.97696C15.4672 5.92097 16.11 7.1237 16.3705 8.43307C16.6309 9.74245 16.4973 11.0996 15.9864 12.333C15.4755 13.5664 14.6103 14.6207 13.5003 15.3624C12.3902 16.1041 11.0852 16.4999 9.75018 16.4999C7.96058 16.4979 6.24484 15.7862 4.9794 14.5207C3.71396 13.2553 3.00216 11.5395 3.00018 9.74993Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                        </svg>
                                    </Button>
                                    <Button className='btn btn-sm btn-dark-transparent border-none'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.125 14.3749C13.8154 14.3749 14.375 13.8153 14.375 13.1249C14.375 12.4346 13.8154 11.8749 13.125 11.8749C12.4346 11.8749 11.875 12.4346 11.875 13.1249C11.875 13.8153 12.4346 14.3749 13.125 14.3749Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                            <path d="M4.375 5.62495C5.06536 5.62495 5.625 5.0653 5.625 4.37495C5.625 3.68459 5.06536 3.12495 4.375 3.12495C3.68464 3.12495 3.125 3.68459 3.125 4.37495C3.125 5.0653 3.68464 5.62495 4.375 5.62495Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                            <path d="M16.875 19.3749C16.3805 19.3749 15.8972 19.2283 15.4861 18.9536C15.075 18.6789 14.7545 18.2885 14.5653 17.8317C14.3761 17.3748 14.3266 16.8722 14.423 16.3872C14.5195 15.9023 14.7576 15.4568 15.1072 15.1072C15.4569 14.7575 15.9023 14.5194 16.3873 14.423C16.8722 14.3265 17.3749 14.376 17.8317 14.5652C18.2885 14.7545 18.679 15.0749 18.9537 15.486C19.2284 15.8971 19.375 16.3805 19.375 16.8749C19.3731 17.5374 19.109 18.1721 18.6406 18.6406C18.1722 19.109 17.5374 19.373 16.875 19.3749ZM16.875 15.6249C16.6278 15.6249 16.3861 15.6983 16.1805 15.8356C15.975 15.973 15.8148 16.1682 15.7201 16.3966C15.6255 16.625 15.6008 16.8763 15.649 17.1188C15.6972 17.3613 15.8163 17.584 15.9911 17.7588C16.1659 17.9336 16.3887 18.0527 16.6311 18.1009C16.8736 18.1492 17.1249 18.1244 17.3534 18.0298C17.5818 17.9352 17.777 17.775 17.9143 17.5694C18.0517 17.3638 18.125 17.1222 18.125 16.8749C18.124 16.5437 17.992 16.2263 17.7578 15.9921C17.5236 15.7579 17.2062 15.6259 16.875 15.6249Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                            <path d="M18.75 9.99998C18.7432 7.68142 17.8192 5.45977 16.1797 3.8203C14.5402 2.18082 12.3186 1.25677 10 1.24998C8.50704 1.22867 7.0369 1.61782 5.75 2.37498L6.4375 3.43748C6.92605 3.20266 7.42676 2.99403 7.9375 2.81248C6.90431 4.85117 6.32841 7.09076 6.25 9.37498H2.5C2.57003 8.343 2.86893 7.33956 3.375 6.43748L2.4375 5.62498C1.65982 6.95183 1.24991 8.46201 1.25 9.99998C1.24986 11.1491 1.47609 12.287 1.91577 13.3486C2.35545 14.4103 2.99996 15.3749 3.8125 16.1875C4.62504 17 5.58969 17.6445 6.65135 18.0842C7.71302 18.5239 8.85089 18.7501 10 18.75C11.1142 18.7605 12.2192 18.548 13.25 18.125L12.875 16.9375C11.8503 17.3757 10.7374 17.5683 9.625 17.5C8.29217 15.45 7.55637 13.0695 7.5 10.625H18.6875C18.7392 10.4209 18.7602 10.2103 18.75 9.99998ZM8 17.25C6.75716 16.8775 5.62142 16.2132 4.6875 15.3125C3.44742 14.0436 2.67598 12.3905 2.5 10.625H6.25C6.336 12.9356 6.93371 15.1983 8 17.25ZM7.5 9.37498C7.54972 6.93842 8.26278 4.56153 9.5625 2.49998H10.4375C11.7372 4.56153 12.4503 6.93842 12.5 9.37498H7.5ZM13.75 9.37498C13.7025 7.05881 13.1025 4.78748 12 2.74998C13.4705 3.17383 14.7778 4.03416 15.7487 5.21714C16.7196 6.40012 17.3085 7.85 17.4375 9.37498H13.75Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                        </svg>
                                    </Button>
                                    <Divider orientation="vertical" className='divider' />
                                </Group>
                                <Group spacing={5} className='hidden md:flex'>
                                    <Button variant='subtle' component='a' href='/login' className='btn btn-md btn-dark-transparent'>
                                        Login
                                    </Button>
                                    <Button component='a' href='/register' className='btn btn-md btn-dark-primary'>
                                        Join Us
                                    </Button>
                                </Group>
                            </Group>
                            <Group className='md:hidden'>
                                <Burger opened={drawerOpened} onClick={toggleDrawer} />
                                <Button onClick={() => setOpenedModal(true)} className='btn btn-sm btn-dark-transparent border-none'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.7502 20.6894L16.0861 15.0253C17.4471 13.3913 18.1258 11.2955 17.981 9.17387C17.8362 7.05224 16.8789 5.06812 15.3085 3.63426C13.738 2.20041 11.6752 1.42721 9.54918 1.47552C7.42316 1.52384 5.39761 2.38993 3.89389 3.89365C2.39018 5.39736 1.52408 7.42292 1.47577 9.54894C1.42746 11.675 2.20065 13.7378 3.63451 15.3082C5.06836 16.8787 7.05248 17.8359 9.17412 17.9808C11.2958 18.1256 13.3915 17.4469 15.0255 16.0859L20.6896 21.7499L21.7502 20.6894ZM3.00018 9.74993C3.00018 8.41491 3.39606 7.10987 4.13776 5.99983C4.87946 4.8898 5.93366 4.02464 7.16706 3.51375C8.40047 3.00285 9.75766 2.86918 11.067 3.12963C12.3764 3.39008 13.5791 4.03296 14.5231 4.97696C15.4672 5.92097 16.11 7.1237 16.3705 8.43307C16.6309 9.74245 16.4973 11.0996 15.9864 12.333C15.4755 13.5664 14.6103 14.6207 13.5003 15.3624C12.3902 16.1041 11.0852 16.4999 9.75018 16.4999C7.96058 16.4979 6.24484 15.7862 4.9794 14.5207C3.71396 13.2553 3.00216 11.5395 3.00018 9.74993Z" fill={`${dark ? '#ffffff' : '#212B36'}`} />
                                    </svg>
                                </Button>
                            </Group>
                        </Group>
                    </Header>
                    <DrawerMenu
                        drawerOpened={drawerOpened}
                        closeDrawer={closeDrawer}
                        linksOpened={linksOpened}
                        toggleLinks={toggleLinks}
                    />
                    <Modal
                        opened={openedModal}
                        onClose={() => setOpenedModal(false)}
                        withCloseButton={false}
                    >
                        <Input
                            icon={<IconAt />}
                            placeholder="Search anything..."
                            size="xl"
                        />
                    </Modal>
                </Container>
            </Box>

        </>
    )
}

export default HeaderLayout