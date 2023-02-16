import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import record from "../data/youtube.json";
import { Menu } from "../comp/menu.js";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Ranking() {
    // console.log(record);

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowImage(true);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    return (
        <>
      <Head>
        <title>Top 1000 Youtube Channels Rankings</title>
        <meta name="author" content="YouTube Rankings" /> 
        <meta name="description" content="Top Popular Youtube Channels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/youtube.png" />
      </Head>

            <main className={styles.main}>

                <Menu />

                <div className={styles.logo} id="logo">
                    <a href="/">
                        {showImage && <img src="/logo.png"></img>}
                    </a>
                </div>  

                <div className={styles.title} id="title">
                    <h1>Top 1000 Youtube Channels</h1>
                </div>

                <div className={styles.rankcont} id="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Youtube Channel</th>
                                        <th>Subscribers</th>
                                    </tr>
                                </thead>

                                <tbody>        
                                    {record.map((rec, index) => {
                                        return (
                                            <tr className={styles.row} key={index}>
                                                <td>{rec.Rank}</td>
                                                <td>{rec["Youtube Channel"]}</td>
                                                <td>{rec.Subscribers}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                </div>
            </main>
        </>
    );
}
