import { ActionIcon, AspectRatio, Button, Center, Container, Divider, Group, Modal, Space, Text, Title } from '@mantine/core'
import { IconChevronRight, IconPlayerPlay } from '@tabler/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import CountUp from 'react-countup';

const Banner = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <section className='banner-area'>
                <Group>
                    <div className='text-center'>
                        <Title order={1} className='text-[40px] lg:text-[64px] font-barlow'>Free <Text component='span' className='text-dark-secondary font-barlow'>Online</Text> <Text component='span' className='text-primary font-barlow' underline>Courses</Text> From The Experts</Title>
                        <Text className='pt-6 pb-8 font-poppins text-dark-secondary'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </Text>
                        <Group position="center">
                            <Button
                                rightIcon={<IconChevronRight />}
                                component='a'
                                href='/'
                                className='btn btn-xl btn-primary'
                            >
                                Get Started
                            </Button>
                            <Group
                                align='center'
                                onClick={() => setOpened(true)}
                                className='cursor-pointer'
                            >
                                <ActionIcon className='bg-secondary transition-all' size={48} radius="xl" variant="filled">
                                    <IconPlayerPlay size={24} />
                                </ActionIcon>
                                <Text weight='600' className='font-barlow text-lg text-light-primary'>Watch Video</Text>
                            </Group>
                        </Group>
                        <Space h={50} />
                        <Divider my="sm" variant="dashed" />
                        <Space h={30} />
                        <Group grow>
                            <div>
                                <CountUp
                                    start={0}
                                    end={14}
                                    separator=" "
                                    decimal=","
                                    suffix=" K+"
                                >
                                    {({ countUpRef }) => (
                                        <h4 ref={countUpRef} className='font-barlow font-bold text-2xl text-light-primary' />
                                    )}
                                </CountUp>
                                <Text className='text-dark-secondary font-poppins'>Learners</Text>
                            </div>
                            <div>
                                <CountUp
                                    start={0}
                                    end={105}
                                    separator=" "
                                    decimal=","
                                    suffix=" K+"
                                >
                                    {({ countUpRef }) => (
                                        <h4 ref={countUpRef} className='font-barlow font-bold text-2xl text-light-primary' />
                                    )}
                                </CountUp>
                                <Text className='text-dark-secondary font-poppins'>Courses</Text>
                            </div>
                            <div>
                                <CountUp
                                    start={0}
                                    end={59}
                                    separator=" "
                                    decimal=","
                                    suffix=" K+"
                                >
                                    {({ countUpRef }) => (
                                        <h4 ref={countUpRef} className='font-barlow font-bold text-2xl text-light-primary' />
                                    )}
                                </CountUp>
                                <Text className='text-dark-secondary font-poppins'>Graduates</Text>
                            </div>
                        </Group>
                    </div>
                </Group>
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Watch Video"
                >
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            src="https://www.youtube.com/embed/Dorf8i6lCuk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Modal>
            </section>
        </>
    )
}

export default Banner