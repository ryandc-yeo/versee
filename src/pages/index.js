import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from './Home'
import CameraPage from './Camera'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Versee</title>
        <meta name="description" content="camera scanning travel app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CameraPage />
      <Main />
    </>
  )
}
