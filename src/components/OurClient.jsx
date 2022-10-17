import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import { Container, Group, Stack, useMantineColorScheme } from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import Image from 'next/future/image';
import ClientOne from '../assets/brand/brand_airbnb.png'
import ClientOneLight from '../assets/brand/brand_airbnblight.png'
import ClientTwo from '../assets/brand/brand_heroku.png'
import ClientTwoLight from '../assets/brand/brand_herokulight.png'
import ClientThree from '../assets/brand/brand_netflix.png'
import ClientThreeLight from '../assets/brand/brand_netflixlight.png'
import ClientFour from '../assets/brand/brand_slack.png'
import ClientFourLight from '../assets/brand/brand_slacklight.png'
import ClientFive from '../assets/brand/brand_spotify.png'
import ClientFiveLight from '../assets/brand/brand_spotifylight.png'
import ClientSix from '../assets/brand/brand_vimeo.png'
import ClientSixLight from '../assets/brand/brand_vimeolight.png'

const OurClient = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    return (
        <>
            <section className="our-client py-16">
                <Container>
                    <Group className='text-center'>
                        <h2 className='w-full text-4xl lg:text-5xl font-barlow text-light-primary'>We Work With</h2>
                        <p className='text-light-disabled'>Quisque aliquet, libero consequat elementum convallis.</p>
                    </Group>
                    <Carousel
                        slideSize="50%"
                        slideGap="xs"
                        loop
                        align="start"
                        slidesToScroll={1}
                        withControls={false}
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        breakpoints={[
                            { maxWidth: 'sm', slideSize: '50%' },
                            { maxWidth: 'md', slideSize: '33.33333%' },
                            { maxWidth: 'lg', slideSize: '25%' },
                            { maxWidth: 'xl', slideSize: '16.6666667%' },
                        ]}
                        className='mt-16'
                    >
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientOneLight : ClientOne} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientTwoLight : ClientTwo} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientThreeLight : ClientThree} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientFourLight : ClientFour} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientFiveLight : ClientFive} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Stack align='center'>
                                <Image src={dark ? ClientSixLight : ClientSix} alt='Client Image' width={106} />
                            </Stack>
                        </Carousel.Slide>
                        {/* ...other slides */}
                    </Carousel>
                </Container>
            </section>
        </>
    )
}

export default OurClient