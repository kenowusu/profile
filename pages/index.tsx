import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



import { HomePage } from '../components/pages/HomePage'

const Home: NextPage = () => {
  return (
   <>
    <Head>
      <title>Kenneth Owusu - Homepage</title>
      <meta name="keywords" content="Kenneth Owusu, Kenowusu"/>
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="Senior Fullstack Engineer in Ghana. WordPress Developer"/>
    </Head>
    <HomePage/>
   </>
  )
}

export default Home
