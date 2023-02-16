import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import record from '../data/youtube.json'
import { Menu } from '../comp/menu.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Most Subscribed 1000 Youtube Channels</title>
        <meta name="author" content="YouTube" /> 
        <meta name="description" content="Top Popular Youtube Channels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/youtube.png" />
      </Head>
      <main className={styles.main} id="colouring">

        <Menu />

        <div className={styles.logo}>
           <a href="/">
            <img src="/logo.png"></img>
          </a>
        </div>  

        <div className={styles.maincont}>

          <div className={styles.heading}>
            <h1>Most Subscribed 1000 Youtube Channels</h1>
          </div>

          <div className={styles.youtube}>
            <img src="/youtube_img.png"></img>
          </div>  

        </div>

        <div className={styles.buttons} >
          <a href="/ranking"><button id="btnColouring">See the Rankings</button></a>
        </div>

      </main>
    </>
  )
}
