import React from 'react'
import Link from 'next/link'
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from '@tabler/icons';
import { Box, Button, Center, Collapse, Divider, Drawer, Group, ScrollArea, Stack, Text, ThemeIcon, UnstyledButton, useMantineTheme } from '@mantine/core';

const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

const DrawerMenu = ({ drawerOpened, closeDrawer, linksOpened, toggleLinks }) => {
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton key={item.title} className='py-2 px-3 rounded-md w-full hover:bg-grey-200'>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" weight={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));
    return (
        <>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="xl"
                padding="md"
                title="Navigation"
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                    <Stack>
                        <Link href="/">
                            <a className='px-4 py-2 hover:bg-grey-200'>Home</a>
                        </Link>
                        <UnstyledButton className='px-4 py-2 hover:bg-grey-200' onClick={toggleLinks}>
                            <Center inline>
                                <Box component="span" mr={5}>
                                    Features
                                </Box>
                                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                            </Center>
                        </UnstyledButton>
                        <Collapse in={linksOpened}>{links}</Collapse>
                        <Link href="/">
                            <a className='px-4 py-2 hover:bg-grey-200'>Learn</a>
                        </Link>
                        <Link href="/">
                            <a className='px-4 py-2 hover:bg-grey-200'>Academy</a>
                        </Link>
                    </Stack>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </>
    )
}

export default DrawerMenu