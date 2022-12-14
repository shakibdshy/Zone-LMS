import Head from 'next/head'
import Banner from '../components/Banner'
import OurClient from '../components/OurClient'

export default function Home() {
  return (
    <div className='container mx-auto px-5'>
      <Head>
        <title>Zone LMS</title>
        <meta name="description" content="Generated by Zone LMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <OurClient />
      
    </div>
  )
}
