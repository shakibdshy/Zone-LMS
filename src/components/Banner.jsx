import React, { useState } from 'react'
import { ActionIcon, AspectRatio, Button, Divider, Grid, Group, Modal, Space, Text, Title } from '@mantine/core'
import { IconChevronRight, IconPlayerPlay } from '@tabler/icons'
import Image from 'next/future/image';
import CountUp from 'react-countup';
import BannerImage from '../assets/banner.png'

const Banner = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <section className='banner-area mt-16 lg:mt-24 pb-20'>
                <Grid align="center">
                    <Grid.Col lg={5} className='text-center lg:text-left'>
                        <Title order={1} className='text-[40px] lg:text-[64px] font-barlow'>Free <Text component='span' className='text-dark-secondary lg:leading-[64px] font-barlow'>Online</Text> <Text component='span' className='text-primary lg:leading-[64px] font-barlow' underline>Courses</Text> From The Experts</Title>
                        <Text className='pt-6 pb-8 font-poppins text-dark-secondary'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </Text>
                        <Group className='justify-center lg:justify-start'>
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
                        {/* Counter Section */}
                        <Group grow>
                            <div className='relative z-10 before:contents before:absolute before:w-6 before:h-6 before:rounded-full before:-top-[3px] before:-left-[6px] before:bg-[#FFC107] before:opacity-[0.24] before:-z-10'>
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
                            <div className='relative z-10 before:contents before:absolute before:w-6 before:h-6 before:rounded-full before:-top-[3px] before:-left-[6px] before:bg-[#FF4842] before:opacity-[0.24] before:-z-10'>
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
                            <div className='relative z-10 before:contents before:absolute before:w-6 before:h-6 before:rounded-full before:-top-[3px] before:-left-[6px] before:bg-[#0CD66E] before:opacity-[0.24] before:-z-10'>
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
                    </Grid.Col>
                    <Grid.Col lg={7} className='hidden lg:block'>
                        <Image src={BannerImage} alt='Banner Image'  />
                    </Grid.Col>
                </Grid>  
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