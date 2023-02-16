import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar/navbar'

//Global Font 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Venom</title>
        <meta name="description" content="Women Fashion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Dapino-People-With-Hat-Miss-purple-hat.ico" />
      </Head>
      
      <main className={inter.className}>
      <Navbar/>
      </main>
    
    </>
  )
}
